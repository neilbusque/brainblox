// A cel-shaded, chunky chibi character (big head, rounded toy limbs) with a dark
// toon outline, glossy eyes, a grin, and blush. Used for BOTH the local player
// and remote players. `update(anim, dt, camera)` swings the limbs for running,
// tucks them for jumping, and adds a gentle idle bob. API is unchanged:
// { root, update, setBodyColor }.

import * as THREE from "three";
import { toonMat, roundedGeo, addOutline } from "./gfx.js";

// distinct bright body colors so players tell each other apart
export const AVATAR_COLORS = [
  0x5cc6f0, 0xff8e72, 0x5fd69a, 0xffd45e, 0xbfa1ff, 0xff94bc, 0xff6b6b, 0x52e0c4,
];

export function colorForId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

function part(w, h, d, color, outline = true) {
  const mesh = new THREE.Mesh(roundedGeo(w, h, d), toonMat(color));
  mesh.castShadow = true;
  if (outline) addOutline(mesh);
  return mesh;
}

export function createAvatar(bodyColor = 0x5cc6f0, name = "") {
  const root = new THREE.Group();
  const skin = 0xffd9b0;
  const pants = 0x2e3f73;
  const ink = 0x1b2a52;

  // torso (group origin sits at torso center)
  const torso = part(0.8, 0.84, 0.48, bodyColor);
  root.add(torso);

  // lightened belly stripe (visual interest)
  const belly = new THREE.Mesh(roundedGeo(0.5, 0.36, 0.06), toonMat(lighten(bodyColor, 0.16)));
  belly.position.set(0, -0.05, 0.24);
  root.add(belly);

  // big chibi head
  const head = part(0.66, 0.66, 0.66, skin);
  head.position.y = 0.82;
  root.add(head);

  // face (unlit so it stays crisp) on the +z side of the head
  const faceInk = new THREE.MeshBasicMaterial({ color: ink });
  const eyeGeo = new THREE.SphereGeometry(0.075, 12, 12);
  const specGeo = new THREE.SphereGeometry(0.024, 8, 8);
  const specMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  for (const sx of [-0.16, 0.16]) {
    const eye = new THREE.Mesh(eyeGeo, faceInk);
    eye.scale.z = 0.55;
    eye.position.set(sx, 0.86, 0.32);
    root.add(eye);
    const spec = new THREE.Mesh(specGeo, specMat);
    spec.position.set(sx - 0.03, 0.9, 0.36);
    root.add(spec);
  }
  // grin
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.024, 8, 16, Math.PI), faceInk);
  smile.rotation.z = Math.PI; // arc opens downward = smile
  smile.position.set(0, 0.74, 0.33);
  root.add(smile);
  // cheeks
  const cheekMat = new THREE.MeshBasicMaterial({ color: 0xff9ec4, transparent: true, opacity: 0.5 });
  for (const sx of [-0.24, 0.24]) {
    const cheek = new THREE.Mesh(new THREE.CircleGeometry(0.07, 16), cheekMat);
    cheek.position.set(sx, 0.74, 0.325);
    root.add(cheek);
  }

  // limbs pivot at the shoulder/hip so they swing
  function limb(w, h, d, color, px, py) {
    const pivot = new THREE.Group();
    pivot.position.set(px, py, 0);
    const mesh = part(w, h, d, color);
    mesh.position.y = -h / 2;
    pivot.add(mesh);
    root.add(pivot);
    return pivot;
  }
  const armL = limb(0.24, 0.74, 0.24, bodyColor, -0.54, 0.36);
  const armR = limb(0.24, 0.74, 0.24, bodyColor, 0.54, 0.36);
  const legL = limb(0.3, 0.7, 0.3, pants, -0.2, -0.42);
  const legR = limb(0.3, 0.7, 0.3, pants, 0.2, -0.42);
  // rounded shoes
  for (const leg of [legL, legR]) {
    const shoe = part(0.34, 0.18, 0.42, 0x1d2b53);
    shoe.position.set(0, -0.74, 0.06);
    leg.add(shoe);
  }

  // recolorable body meshes (torso + arms + belly)
  const bodyMeshes = [torso, armL.children[0], armR.children[0], belly];

  // optional floating name tag
  let tag = null;
  if (name) {
    tag = makeNameTag(name);
    tag.position.set(0, 1.55, 0);
    root.add(tag);
  }

  let t = 0;
  function update(anim, dt, camera) {
    t += dt;
    if (anim === "run") {
      const s = Math.sin(t * 12) * 0.95;
      legL.rotation.x = s;
      legR.rotation.x = -s;
      armL.rotation.x = -s;
      armR.rotation.x = s;
      torso.position.y = Math.abs(Math.sin(t * 12)) * 0.05;
    } else if (anim === "jump") {
      const e = 0.6;
      legL.rotation.x = THREE.MathUtils.lerp(legL.rotation.x, -0.5, e);
      legR.rotation.x = THREE.MathUtils.lerp(legR.rotation.x, 0.4, e);
      armL.rotation.x = THREE.MathUtils.lerp(armL.rotation.x, -2.3, e);
      armR.rotation.x = THREE.MathUtils.lerp(armR.rotation.x, -2.3, e);
      torso.position.y = 0;
    } else {
      const e = 0.15;
      for (const l of [legL, legR, armL, armR]) l.rotation.x = THREE.MathUtils.lerp(l.rotation.x, 0, e);
      torso.position.y = Math.sin(t * 2) * 0.03;
    }
    if (tag && camera) tag.quaternion.copy(camera.quaternion);
  }

  function setBodyColor(c) {
    for (const m of bodyMeshes) m.material.color.set(m === belly ? lighten(c, 0.16) : c);
  }

  return { root, update, setBodyColor };
}

function lighten(hex, amt) {
  const c = new THREE.Color(hex);
  c.lerp(new THREE.Color(0xffffff), amt);
  return c.getHex();
}

function makeNameTag(name) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(20,32,63,0.8)";
  roundRect(ctx, 12, 16, 488, 96, 30);
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "rgba(255,255,255,0.22)";
  roundRect(ctx, 16, 20, 480, 88, 28);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.font = "bold 58px 'Baloo 2', 'Trebuchet MS', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(name.slice(0, 12), 256, 66);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sprite.scale.set(1.8, 0.45, 1);
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
