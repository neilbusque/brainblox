// The 3D Explore World - a Roblox-style open hub you walk around. A grassy plaza
// with a fountain, a pool, trees, paths and lamp-posts, ringed by cute building
// "standees" (the generated art, white removed at runtime) that are portals into
// each activity. Walk onto a building's glowing pad and an Enter button appears.

import * as THREE from "three";
import { createPlayer, updatePlayer, respawn } from "./player.js";
import { createAvatar } from "./avatar.js";
import { createControls, isTouchDevice } from "./controls.js";
import { createFollowCamera, intentToWorld } from "./camera.js";
import { toonMat, roundedGeo, markBloom } from "./gfx.js";
import { createPostFX } from "./postfx.js";
import { sfx } from "./audio.js";

const HIGH_END = !isTouchDevice() && window.devicePixelRatio < 2.5 && (navigator.hardwareConcurrency || 4) > 4;
const LOW = isTouchDevice() && window.devicePixelRatio >= 2;
const BASE = import.meta.env.BASE_URL;

// each zone: a building standee + portal pad. `soon` marks not-yet-built modes.
const ZONES = [
  { key: "obby", name: "Obstacle Course", emoji: "🏃", img: "gym", color: 0xff8e72 },
  { key: "arcade", name: "Quiz Arcade", emoji: "⚡", img: "arcade", color: 0xffd45e },
  { key: "puzzles", name: "Jigsaw Puzzles", emoji: "🧩", img: "toystore", color: 0x5fd69a },
  { key: "learn", name: "Learn", emoji: "📚", img: "school", color: 0x5fc6f0 },
  { key: "coinrush", name: "Coin Rush", emoji: "🪙", img: "icecream", color: 0xffcf3a },
  { key: "maze", name: "Maze", emoji: "🌀", img: "library", color: 0xbfa1ff },
];

export function startExplore(onEnter) {
  const root = document.getElementById("game-root");
  const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  root.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xdcefff, 55, 180);
  scene.add(makeSky());

  scene.add(new THREE.HemisphereLight(0xfff7e6, 0xbfd4ff, 0.9));
  scene.add(new THREE.AmbientLight(0x9fb8e8, 0.18));
  const sun = new THREE.DirectionalLight(0xfff1d6, 1.25);
  sun.castShadow = true;
  sun.position.set(20, 34, 14);
  sun.shadow.mapSize.set(HIGH_END ? 2048 : 1024, HIGH_END ? 2048 : 1024);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 90;
  sun.shadow.camera.left = sun.shadow.camera.bottom = -40;
  sun.shadow.camera.right = sun.shadow.camera.top = 40;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  scene.add(sun, sun.target);

  // ---------- world geometry ----------
  const colliders = [];
  const aabb = (cx, cy, cz, sx, sy, sz) => ({ min: { x: cx - sx / 2, y: cy - sy / 2, z: cz - sz / 2 }, max: { x: cx + sx / 2, y: cy + sy / 2, z: cz + sz / 2 } });

  const R = 30; // world radius
  // grass ground
  const ground = new THREE.Mesh(new THREE.CircleGeometry(R + 4, 48), toonMat(0x7ed87e));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  colliders.push(aabb(0, -0.5, 0, (R + 4) * 2, 1, (R + 4) * 2)); // flat floor at y=0

  // stone plaza
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(11, 40), toonMat(0xe6dcc0));
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.y = 0.02;
  plaza.receiveShadow = true;
  scene.add(plaza);

  // central fountain
  const fountain = new THREE.Group();
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.6, 0.7, 20), toonMat(0xcfd6e6));
  basin.position.y = 0.35;
  const water = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.1, 0.2, 20), new THREE.MeshBasicMaterial({ color: 0x6fd0ff }));
  water.position.y = 0.62;
  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 1.4, 12), toonMat(0xcfd6e6));
  spout.position.y = 1.3;
  fountain.add(basin, water, spout);
  fountain.traverse((o) => (o.castShadow = true));
  scene.add(fountain);
  colliders.push(aabb(0, 1, 0, 5.2, 2, 5.2));

  // a fun pool (resort vibe) off to one side
  const pool = new THREE.Mesh(new THREE.CircleGeometry(5, 28), new THREE.MeshBasicMaterial({ color: 0x57c6f0 }));
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(16, 0.03, 16);
  scene.add(pool);
  const poolRim = new THREE.Mesh(new THREE.TorusGeometry(5, 0.4, 10, 36), toonMat(0xede3c8));
  poolRim.rotation.x = Math.PI / 2;
  poolRim.position.set(16, 0.1, 16);
  scene.add(poolRim);

  // trees + lamp-posts scattered around
  const trunkGeo = new THREE.CylinderGeometry(0.22, 0.3, 1.4, 7);
  const trunkMat = toonMat(0x9a6b4f);
  const leafGeo = new THREE.IcosahedronGeometry(1.1, 0);
  const leafMat = toonMat(0x57b85c, { flatShading: true });
  function tree(x, z, s = 1) {
    const g = new THREE.Group();
    const t = new THREE.Mesh(trunkGeo, trunkMat); t.position.y = 0.7; t.castShadow = true;
    const l = new THREE.Mesh(leafGeo, leafMat); l.position.y = 1.9; l.castShadow = true;
    g.add(t, l); g.position.set(x, 0, z); g.scale.setScalar(s); scene.add(g);
    colliders.push(aabb(x, 1, z, 0.6, 2, 0.6));
  }
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2 + 0.3;
    const rr = 22 + (i % 3) * 2.5;
    tree(Math.cos(a) * rr, Math.sin(a) * rr, 0.9 + (i % 3) * 0.25);
  }

  // ---------- building "standees" = portals ----------
  const portals = [];
  const ringR = 18;
  ZONES.forEach((z, i) => {
    const ang = (i / ZONES.length) * Math.PI * 2;
    const bx = Math.cos(ang) * ringR;
    const bz = Math.sin(ang) * ringR;
    const facing = Math.atan2(-bx, -bz); // face the plaza center

    const group = new THREE.Group();
    group.position.set(bx, 0, bz);
    group.rotation.y = facing;
    scene.add(group);

    // colored base plinth
    const base = new THREE.Mesh(roundedGeo(6, 0.6, 2.5, 0.2, 2), toonMat(z.color));
    base.position.y = 0.3; base.castShadow = true; base.receiveShadow = true;
    group.add(base);
    colliders.push(aabb(bx, 1.5, bz, 5.5, 3, 2));

    // the building art as a standee (white removed at load)
    const standee = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshBasicMaterial({ transparent: true, alphaTest: 0.5, side: THREE.DoubleSide, color: 0xffffff }));
    standee.position.set(0, 3.1, 0);
    group.add(standee);
    loadCutout(`${BASE}assets/world/${z.img}.jpg`, (tex) => { standee.material.map = tex; standee.material.needsUpdate = true; });

    // floating sign with emoji + name
    const sign = makeSign(z.emoji + " " + z.name + (z.soon ? "  🔜" : ""));
    sign.position.set(0, 6, 0);
    group.add(sign);

    // glowing portal pad in front (toward center)
    const padPos = new THREE.Vector3(bx * 0.74, 0.05, bz * 0.74);
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 0.12, 24), new THREE.MeshBasicMaterial({ color: z.color }));
    pad.position.copy(padPos); pad.position.y = 0.06;
    markBloom(pad);
    scene.add(pad);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2, 0.12, 10, 28), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    ring.rotation.x = Math.PI / 2; ring.position.copy(padPos); ring.position.y = 0.14;
    markBloom(ring);
    scene.add(ring);

    portals.push({ ...z, padPos, ring, sign });
  });

  // ---------- clouds + ambient coins ----------
  const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cloudGeo = new THREE.IcosahedronGeometry(1.4, 0);
  const clouds = [];
  for (let i = 0; i < 12; i++) {
    const c = new THREE.Mesh(cloudGeo, cloudMat);
    c.position.set((i * 7) % 60 - 30, 13 + (i % 3) * 3, (i * 11) % 60 - 30);
    c.scale.set(1 + (i % 2), 0.6, 1.2); scene.add(c); clouds.push(c);
  }

  // ---------- player + camera + controls ----------
  const player = createPlayer({ x: 0, y: 1.5, z: -7 });
  player.facing = 0;
  if (import.meta.env.DEV) window.__bbPlayer = player;
  const avatar = createAvatar(0x5cc6f0);
  scene.add(avatar.root);
  const camera = createFollowCamera(window.innerWidth / window.innerHeight);
  camera.snap(player.pos);
  const controls = createControls();
  if (isTouchDevice()) document.getElementById("touch-controls").classList.remove("hidden");

  const postfx = createPostFX(renderer, scene, camera.cam, { low: LOW });

  // ---------- enter prompt (DOM) ----------
  const prompt = document.getElementById("explore-prompt");
  let activePortal = null;
  function showPrompt(p) {
    activePortal = p;
    prompt.textContent = p.soon ? `${p.emoji} ${p.name} - Coming soon!` : `▶ Enter ${p.name}`;
    prompt.classList.toggle("soon", !!p.soon);
    prompt.classList.remove("hidden");
  }
  function hidePrompt() { activePortal = null; prompt.classList.add("hidden"); }
  function enter() {
    if (!activePortal) return;
    if (activePortal.soon) { sfx.wrong(); flashSoon(); return; }
    sfx.gate();
    onEnter(activePortal.key);
  }
  const onPromptClick = () => enter();
  prompt.addEventListener("click", onPromptClick);
  const onKey = (e) => { if ((e.key === "Enter" || e.key === "e") && activePortal) enter(); };
  window.addEventListener("keydown", onKey);
  function flashSoon() {
    prompt.animate([{ transform: "translateX(-50%) scale(1.1)" }, { transform: "translateX(-50%) scale(1)" }], { duration: 300 });
  }

  // ---------- loop ----------
  let alive = true, last = performance.now(), elapsed = 0, rafId = 0;
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now; elapsed += dt;
    const inRaw = controls.getInput();
    const dir = intentToWorld(inRaw.fwd, inRaw.right, camera.state.yaw);
    const wasGrounded = player.grounded;
    updatePlayer(player, dt, { moveX: dir.x, moveZ: dir.z, jump: inRaw.jump }, colliders);
    if (inRaw.jump && wasGrounded) sfx.jump();

    // keep inside the world
    const d = Math.hypot(player.pos.x, player.pos.z);
    if (d > R) { player.pos.x *= R / d; player.pos.z *= R / d; }
    if (player.pos.y < -10) respawn(player, { x: 0, y: 1.5, z: -7 });

    // nearest portal pad
    let near = null, nd = 3.2;
    for (const p of portals) {
      const pd = Math.hypot(player.pos.x - p.padPos.x, player.pos.z - p.padPos.z);
      if (pd < nd) { nd = pd; near = p; }
    }
    if (near && near !== activePortal) showPrompt(near);
    else if (!near && activePortal) hidePrompt();

    // animate
    avatar.root.position.set(player.pos.x, player.pos.y + 0.15, player.pos.z);
    avatar.root.rotation.y = player.facing;
    avatar.update(player.anim, dt, camera.cam);
    camera.follow(player.pos, dt);
    sun.position.set(player.pos.x + 18, 34, player.pos.z + 12);
    sun.target.position.set(player.pos.x, 0, player.pos.z);
    water.rotation.y += dt;
    for (const p of portals) { p.ring.rotation.z += dt * 1.5; p.ring.scale.setScalar(1 + Math.sin(elapsed * 3) * 0.06); p.sign.quaternion.copy(camera.cam.quaternion); }
    for (const c of clouds) { c.position.x += dt * 0.4; if (c.position.x > 34) c.position.x = -34; }

    postfx.render();
    if (alive) rafId = requestAnimationFrame(frame);
  }
  rafId = requestAnimationFrame(frame);

  const onResize = () => { renderer.setSize(innerWidth, innerHeight); camera.cam.aspect = innerWidth / innerHeight; camera.cam.updateProjectionMatrix(); postfx.setSize(innerWidth, innerHeight); };
  window.addEventListener("resize", onResize);

  function destroy() {
    alive = false;
    cancelAnimationFrame(rafId);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("keydown", onKey);
    prompt.removeEventListener("click", onPromptClick);
    prompt.classList.add("hidden");
    controls.destroy?.();
    document.getElementById("touch-controls")?.classList.add("hidden");
    renderer.dispose();
    if (renderer.domElement.parentElement) renderer.domElement.parentElement.removeChild(renderer.domElement);
  }
  return { destroy };
}

// load an image and knock out its white background -> transparent texture
function loadCutout(url, cb) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    const c = document.createElement("canvas");
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const d = ctx.getImageData(0, 0, c.width, c.height);
    const a = d.data;
    for (let i = 0; i < a.length; i += 4) {
      if (a[i] > 234 && a[i + 1] > 234 && a[i + 2] > 234) a[i + 3] = 0;
    }
    ctx.putImageData(d, 0, 0);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    cb(tex);
  };
  img.onerror = () => {};
  img.src = url;
}

function makeSign(text) {
  const canvas = document.createElement("canvas");
  canvas.width = 512; canvas.height = 96;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(20,32,63,0.85)";
  roundRect(ctx, 6, 10, 500, 76, 24); ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "bold 44px 'Baloo 2', sans-serif";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(text, 256, 50);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sprite.scale.set(4.2, 0.8, 1);
  return sprite;
}
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

function makeSky() {
  const geo = new THREE.SphereGeometry(300, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { top: { value: new THREE.Color(0x6fbeff) }, mid: { value: new THREE.Color(0x9ad4ff) }, bottom: { value: new THREE.Color(0xeaf6ff) }, exponent: { value: 0.55 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vDir; uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform float exponent;
      void main(){ float t = pow(max(vDir.y,0.0), exponent); vec3 c = t < 0.5 ? mix(bottom, mid, t*2.0) : mix(mid, top, (t-0.5)*2.0); gl_FragColor = vec4(c, 1.0); }`,
  });
  return new THREE.Mesh(geo, mat);
}
