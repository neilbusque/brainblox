import "./style.css";
import * as THREE from "three";

import { buildWorld } from "./world.js";
import { createPlayer, updatePlayer, respawn } from "./player.js";
import { createAvatar } from "./avatar.js";
import { createControls, isTouchDevice } from "./controls.js";
import { createFollowCamera, intentToWorld } from "./camera.js";
import { setupFullscreen } from "./fullscreen.js";
import { getQuestion } from "./questions.js";
import { createQuiz } from "./quiz.js";
import { createHud } from "./hud.js";
import { sfx, unlockAudio } from "./audio.js";
import { showLobby } from "./lobby.js";
import { createNet, MULTIPLAYER_AVAILABLE } from "./net.js";
import { createRemotePlayers } from "./remotePlayers.js";
import { createVoice } from "./voice.js";
import { colorForId } from "./avatar.js";

const AVATAR_Y_OFFSET = 0.15; // lift the visual so feet rest on platform tops

boot();

async function boot() {
  const choice = await showLobby();
  unlockAudio();
  startGame(choice);
}

function startGame(choice) {
  // ---------- renderer + scene ----------
  const root = document.getElementById("game-root");
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  root.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xbfe6ff, 45, 170);
  scene.add(makeSky());

  // ---------- lighting ----------
  const hemi = new THREE.HemisphereLight(0xffffff, 0x6b8cce, 0.9);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff4e0, 1.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 60;
  sun.shadow.camera.left = -22;
  sun.shadow.camera.right = 22;
  sun.shadow.camera.top = 22;
  sun.shadow.camera.bottom = -22;
  sun.shadow.bias = -0.0005;
  scene.add(sun);
  scene.add(sun.target);

  // ---------- world ----------
  const world = buildWorld();
  scene.add(world.group);

  // ---------- local player ----------
  const player = createPlayer(world.spawn);
  const myColor = MULTIPLAYER_AVAILABLE && choice.mode === "multi" ? null : 0x4cc9f0;
  const avatar = createAvatar(myColor ?? 0x4cc9f0);
  scene.add(avatar.root);

  // ---------- camera + controls ----------
  const camera = createFollowCamera(window.innerWidth / window.innerHeight);
  camera.snap(player.pos);
  const controls = createControls();
  setupFullscreen("btn-fs");

  if (isTouchDevice()) document.getElementById("touch-controls").classList.remove("hidden");

  // ---------- ui ----------
  const quiz = createQuiz();
  const hud = createHud();
  document.getElementById("hud").classList.remove("hidden");

  // ---------- multiplayer ----------
  const remote = createRemotePlayers();
  scene.add(remote.group);
  let net = null;
  let voice = null;
  let others = [];
  const speaking = new Set(); // ids currently talking ("me" or peer id)
  let me = null;

  function refreshPlayers() {
    const list = [{ id: me?.id || "me", name: me?.name || choice.name, color: me?.color ?? 0x4cc9f0, speaking: speaking.has("me") || speaking.has(me?.id) }];
    for (const o of others) list.push({ ...o, speaking: speaking.has(o.id) });
    hud.setPlayers(list);
  }

  if (choice.mode === "multi" && MULTIPLAYER_AVAILABLE) {
    setupMultiplayer(choice).catch((e) => {
      console.error(e);
      hud.showFlash("Could not join room", 1500);
    });
  }

  async function setupMultiplayer(choice) {
    net = createNet();
    const id = crypto.randomUUID();
    me = { id, name: choice.name, color: colorForId(id) };
    avatar.setBodyColor(me.color);

    net.on("roster", (players) => {
      others = players.filter((p) => p.id !== me.id);
      remote.syncRoster(others);
      refreshPlayers();
    });
    net.on("state", (packet) => remote.applyState(packet));

    const ok = await net.join(choice.code, me);
    if (!ok) {
      hud.showFlash("Rooms not set up", 1500);
      return;
    }
    hud.showRoom(choice.code);
    setupInvite(choice.code);

    // voice
    voice = createVoice(net, {
      onSpeaking: (id, on) => {
        if (on) speaking.add(id);
        else speaking.delete(id);
        refreshPlayers();
      },
    });
    voice.wire();
    const muteBtn = document.getElementById("btn-mute");
    muteBtn.classList.remove("hidden");
    muteBtn.classList.add("muted");
    const started = await voice.start();
    if (started) {
      others.forEach((o) => voice.connect && voice.connect(o.id));
      muteBtn.addEventListener("click", () => {
        const muted = voice.toggleMute();
        muteBtn.classList.toggle("muted", muted);
        muteBtn.classList.toggle("live", !muted);
        muteBtn.textContent = muted ? "🔇" : "🎤";
        hud.showFlash(muted ? "Mic off" : "Mic on - say hi!", 900);
      });
    } else {
      muteBtn.textContent = "🚫";
      muteBtn.title = "Microphone blocked";
    }
    refreshPlayers();
  }

  function setupInvite(code) {
    const btn = document.getElementById("btn-copy");
    btn.addEventListener("click", async () => {
      const link = `${location.origin}${location.pathname}?room=${code}`;
      try {
        await navigator.clipboard.writeText(link);
        hud.showFlash("Link copied!", 900);
      } catch {
        hud.showFlash(link, 1800);
      }
    });
  }

  // ---------- game state ----------
  let state = "play"; // play | quiz | win
  let level = 0;
  let respawnPoint = { ...world.spawn };
  const fades = []; // gate fade tweens: { mesh, t }

  async function triggerQuiz(cp) {
    cp.armed = false;
    state = "quiz";
    controls.setEnabled(false);
    respawnPoint = { ...cp.pos };
    sfx.checkpoint();

    const q = getQuestion(level);
    const correct = await quiz.ask(q);

    if (correct) {
      cp.cleared = true;
      hud.addStar();
      sfx.correct();
      sfx.gate();
      world.openGate(cp.index);
      fades.push({ mesh: world.gates[cp.index].mesh, t: 0 });
      level += 1;
      hud.showFlash("Gate open!", 900);
    } else {
      sfx.wrong();
      hud.showFlash("Try again!", 1000);
      respawn(player, cp.pos); // back onto the safe pad, gate still locked
    }
    state = state === "win" ? "win" : "play";
    controls.setEnabled(true);
  }

  function softReset() {
    hud.hideWin();
    hud.setStars(0);
    level = 0;
    respawnPoint = { ...world.spawn };
    respawn(player, world.spawn);
    for (const cp of world.checkpoints) {
      cp.armed = true;
      cp.cleared = false;
      cp.triggered = false;
    }
    for (const g of world.gates) {
      g.open = false;
      g.mesh.visible = true;
      g.mesh.material.opacity = 0.78;
    }
    camera.snap(player.pos);
    state = "play";
    controls.setEnabled(true);
  }
  document.getElementById("btn-play-again").addEventListener("click", softReset);

  // arm all checkpoints initially
  for (const cp of world.checkpoints) cp.armed = true;

  // ---------- main loop ----------
  let last = performance.now();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    if (state === "play") {
      const inRaw = controls.getInput();
      const dir = intentToWorld(inRaw.fwd, inRaw.right, camera.state.yaw);
      const wasGrounded = player.grounded;
      const { fell } = updatePlayer(player, dt, { moveX: dir.x, moveZ: dir.z, jump: inRaw.jump }, world.getColliders());
      if (inRaw.jump && wasGrounded) sfx.jump();
      if (fell) {
        respawn(player, respawnPoint);
        hud.showFlash("Whoops!", 700);
      }

      // checkpoints: trigger when armed + inside ring; re-arm after leaving
      for (const cp of world.checkpoints) {
        const d = Math.hypot(player.pos.x - cp.pos.x, player.pos.z - cp.pos.z);
        const within = d < cp.radius && Math.abs(player.pos.y - cp.pos.y) < 3;
        if (cp.armed && within && !cp.cleared) {
          triggerQuiz(cp);
          break;
        }
        if (!cp.armed && !cp.cleared && !within) cp.armed = true;
      }

      // win check
      const dg = Math.hypot(player.pos.x - world.goal.pos.x, player.pos.z - world.goal.pos.z);
      if (state === "play" && dg < world.goal.radius && player.pos.y > world.goal.pos.y - 2) {
        state = "win";
        controls.setEnabled(false);
        sfx.win();
        hud.showWin();
      }

      // broadcast my position
      if (net) net.sendState({ x: player.pos.x, y: player.pos.y, z: player.pos.z, ry: player.facing, anim: player.anim });
    }

    // place + animate local avatar
    avatar.root.position.set(player.pos.x, player.pos.y + AVATAR_Y_OFFSET, player.pos.z);
    avatar.root.rotation.y = player.facing;
    avatar.update(player.anim, dt, camera.cam);

    // remote players
    remote.update(dt, camera.cam);

    // camera + sun follow the player
    camera.follow(player.pos, dt);
    sun.position.set(player.pos.x + 12, player.pos.y + 28, player.pos.z + 8);
    sun.target.position.set(player.pos.x, player.pos.y, player.pos.z);

    // spin the goal flag + checkpoint rings a touch
    world.goal.flag.rotation.y += dt * 1.5;
    for (const cp of world.checkpoints) if (cp.ring) cp.ring.rotation.z += dt * (cp.cleared ? 0.4 : 1.6);

    // gate fade tweens
    for (let i = fades.length - 1; i >= 0; i--) {
      const f = fades[i];
      f.t += dt;
      f.mesh.material.opacity = Math.max(0, 0.78 * (1 - f.t / 0.6));
      if (f.t >= 0.6) {
        f.mesh.visible = false;
        fades.splice(i, 1);
      }
    }

    renderer.render(scene, camera.cam);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // ---------- resize ----------
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.cam.aspect = window.innerWidth / window.innerHeight;
    camera.cam.updateProjectionMatrix();
  });

  // tidy up voice/net if the tab closes
  window.addEventListener("beforeunload", () => {
    if (voice) voice.stop();
    if (net) net.leave();
  });
}

// vertical gradient skydome
function makeSky() {
  const geo = new THREE.SphereGeometry(300, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      top: { value: new THREE.Color(0x3aa0ff) },
      bottom: { value: new THREE.Color(0xdaf2ff) },
      exponent: { value: 0.7 },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vDir; uniform vec3 top; uniform vec3 bottom; uniform float exponent;
      void main(){ float t = pow(max(vDir.y,0.0), exponent); gl_FragColor = vec4(mix(bottom, top, t), 1.0); }`,
  });
  return new THREE.Mesh(geo, mat);
}
