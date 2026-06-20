// A blocky Roblox-style humanoid character: head, torso, two arms, two legs,
// built from rounded boxes. Used for BOTH the local player and remote players.
// `update(anim, dt)` swings the limbs for running, tucks them for jumping, and
// adds a gentle idle bob, so movement reads as a real little character.

import * as THREE from "three";

// distinct bright body colors so players tell each other apart
export const AVATAR_COLORS = [
  0xff7b54, 0x4cc9f0, 0x36d399, 0xffd23f, 0xb892ff, 0xff6b9d, 0xff5d5d, 0x52e0c4,
];

export function colorForId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

function roundedBox(w, h, d, color) {
  // BoxGeometry with a tiny bevel feel via flat shading + slight scale; keeps it
  // cheap but reads softer than a hard cube.
  const geo = new THREE.BoxGeometry(w, h, d, 1, 1, 1);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.6, metalness: 0.05 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  return mesh;
}

// Build a character. Returns { root, update } where root is a THREE.Group whose
// position you set to player.pos (the group's origin sits at the player center).
export function createAvatar(bodyColor = 0x4cc9f0, name = "") {
  const root = new THREE.Group();

  const skin = 0xffe0bd;
  const pants = 0x2b3a67;

  // torso (center of the group)
  const torso = roundedBox(0.85, 0.9, 0.5, bodyColor);
  torso.position.y = 0;
  root.add(torso);

  // head
  const head = roundedBox(0.62, 0.6, 0.62, skin);
  head.position.y = 0.78;
  root.add(head);

  // simple face (two eyes + smile) on the +z face of the head
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x1d2b53 });
  const eyeGeo = new THREE.BoxGeometry(0.1, 0.12, 0.04);
  const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
  const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
  eyeL.position.set(-0.14, 0.83, 0.32);
  eyeR.position.set(0.14, 0.83, 0.32);
  root.add(eyeL, eyeR);
  const smile = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.06, 0.04), eyeMat);
  smile.position.set(0, 0.66, 0.32);
  root.add(smile);

  // arms - pivot at the shoulder so they swing nicely
  function limb(w, h, d, color, px) {
    const pivot = new THREE.Group();
    pivot.position.set(px, 0, 0);
    const mesh = roundedBox(w, h, d, color);
    mesh.position.y = -h / 2; // hang down from the pivot
    pivot.add(mesh);
    root.add(pivot);
    return pivot;
  }
  const armL = limb(0.26, 0.8, 0.26, bodyColor, -0.56);
  const armR = limb(0.26, 0.8, 0.26, bodyColor, 0.56);
  armL.position.y = 0.4;
  armR.position.y = 0.4;

  const legL = limb(0.3, 0.8, 0.3, pants, -0.22);
  const legR = limb(0.3, 0.8, 0.3, pants, 0.22);
  legL.position.y = -0.45;
  legR.position.y = -0.45;

  // optional floating name tag
  let tag = null;
  if (name) {
    tag = makeNameTag(name);
    tag.position.set(0, 1.5, 0);
    root.add(tag);
  }

  let t = 0;
  function update(anim, dt, camera) {
    t += dt;
    if (anim === "run") {
      const s = Math.sin(t * 12) * 0.9;
      legL.rotation.x = s;
      legR.rotation.x = -s;
      armL.rotation.x = -s;
      armR.rotation.x = s;
      torso.position.y = Math.abs(Math.sin(t * 12)) * 0.05;
    } else if (anim === "jump") {
      // tuck: arms up, legs slightly bent
      const ease = 0.6;
      legL.rotation.x = THREE.MathUtils.lerp(legL.rotation.x, -0.5, ease);
      legR.rotation.x = THREE.MathUtils.lerp(legR.rotation.x, 0.4, ease);
      armL.rotation.x = THREE.MathUtils.lerp(armL.rotation.x, -2.2, ease);
      armR.rotation.x = THREE.MathUtils.lerp(armR.rotation.x, -2.2, ease);
      torso.position.y = 0;
    } else {
      // idle: ease limbs back to rest + gentle breathing bob
      const ease = 0.15;
      for (const l of [legL, legR, armL, armR]) l.rotation.x = THREE.MathUtils.lerp(l.rotation.x, 0, ease);
      torso.position.y = Math.sin(t * 2) * 0.03;
    }
    // billboard the name tag toward the camera
    if (tag && camera) tag.quaternion.copy(camera.quaternion);
  }

  return { root, update, setBodyColor: (c) => torso.material.color.set(c) };
}

function makeNameTag(name) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(29,43,83,0.85)";
  roundRect(ctx, 8, 8, 240, 48, 16);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "bold 30px 'Trebuchet MS', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(name.slice(0, 12), 128, 34);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sprite.scale.set(1.7, 0.42, 1);
  return sprite;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
