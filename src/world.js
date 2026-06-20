// Builds the obby level: a rising path of colorful blocky platforms split into
// sections. Each section ends with a checkpoint ring and a locked gate. Clearing
// the section's quiz opens the gate and moves your respawn point forward.
//
// Returns an object the game loop uses:
//   group          THREE.Group to add to the scene
//   platforms      static AABBs the player always collides with
//   checkpoints    [{ pos, radius, index, triggered }]
//   gates          [{ index, mesh, aabb, open }]
//   goal           { pos, radius }
//   spawn          starting position
//   getColliders() platforms + AABBs of still-closed gates (call each frame)
//   openGate(i)    fade + unlock gate i

import * as THREE from "three";

const PALETTE = [0xff7b54, 0x4cc9f0, 0x36d399, 0xffd23f, 0xb892ff, 0xff6b9d];

function boxAABB(cx, cy, cz, sx, sy, sz) {
  return {
    min: { x: cx - sx / 2, y: cy - sy / 2, z: cz - sz / 2 },
    max: { x: cx + sx / 2, y: cy + sy / 2, z: cz + sz / 2 },
  };
}

export const GATE_COUNT = 6;

export function buildWorld() {
  const group = new THREE.Group();
  const platforms = [];
  const checkpoints = [];
  const gates = [];

  let colorIdx = 0;
  function addPlatform(cx, cy, cz, sx, sy, sz, color) {
    const geo = new THREE.BoxGeometry(sx, sy, sz);
    const mat = new THREE.MeshStandardMaterial({
      color: color ?? PALETTE[colorIdx++ % PALETTE.length],
      roughness: 0.85,
      metalness: 0,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(cx, cy, cz);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    platforms.push(boxAABB(cx, cy, cz, sx, sy, sz));
    return mesh;
  }

  // ---- starting plaza ----
  const spawn = { x: 0, y: 2, z: 0 };
  addPlatform(0, -0.5, 0, 10, 1, 10, 0x8ecae6);

  let z = 5; // leading edge of the path
  let y = 0; // top height of the last platform's surface

  for (let g = 0; g < GATE_COUNT; g++) {
    // a few stepping platforms toward the checkpoint. Early gates are very
    // forgiving (small gaps, wide platforms, nearly centered) so an 8-year-old
    // can clear them; gaps widen, platforms shrink, and the path zig-zags more
    // as the gate number climbs.
    const steps = 3 + (g % 2); // 3 or 4
    for (let s = 0; s < steps; s++) {
      z += 2.4 + g * 0.22; // gaps start tiny, widen with each gate
      y += 0.32 + (g % 3) * 0.12; // gentle rise
      const w = Math.max(2.6, 4.4 - g * 0.22); // wide early, smaller later
      const xoff = g === 0 ? 0 : (s % 2 === 0 ? -1 : 1) * (0.4 + g * 0.12);
      addPlatform(xoff, y - 0.5, z, w, 1, w);
    }

    // checkpoint pad (wider, safe landing) + glowing ring
    z += 2.8;
    y += 0.3;
    const padMesh = addPlatform(0, y - 0.5, z, 5, 1, 5, 0xffffff);
    padMesh.material.color.set(0xfff3b0);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.18, 10, 28),
      new THREE.MeshStandardMaterial({ color: 0x36d399, emissive: 0x1f8f63, emissiveIntensity: 0.6 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0, y + 0.8, z);
    group.add(ring);
    checkpoints.push({ pos: { x: 0, y: y + 1, z }, radius: 2.2, index: g, triggered: false, ring });

    // locked gate just past the checkpoint (a translucent colored wall)
    const gateZ = z + 2.6;
    const gateColor = PALETTE[g % PALETTE.length];
    const gateMesh = new THREE.Mesh(
      new THREE.BoxGeometry(6, 4, 0.6),
      new THREE.MeshStandardMaterial({
        color: gateColor,
        transparent: true,
        opacity: 0.78,
        emissive: gateColor,
        emissiveIntensity: 0.25,
      })
    );
    gateMesh.position.set(0, y + 1.5, gateZ);
    group.add(gateMesh);
    gates.push({ index: g, mesh: gateMesh, aabb: boxAABB(0, y + 1.5, gateZ, 6, 4, 0.6), open: false });

    z = gateZ + 0.6;
  }

  // ---- goal podium ----
  z += 3.6;
  y += 0.5;
  const goalPad = addPlatform(0, y - 0.5, z, 6, 1, 6, 0xffd23f);
  goalPad.material.emissive = new THREE.Color(0xffaa00);
  goalPad.material.emissiveIntensity = 0.3;
  const flag = new THREE.Mesh(
    new THREE.ConeGeometry(0.6, 1.4, 6),
    new THREE.MeshStandardMaterial({ color: 0xff3b3b, emissive: 0xaa0000, emissiveIntensity: 0.4 })
  );
  flag.position.set(0, y + 1.4, z);
  group.add(flag);
  const goal = { pos: { x: 0, y: y + 1, z }, radius: 2.4, flag };

  // decorative clouds (no collision)
  for (let i = 0; i < 14; i++) {
    const cloud = new THREE.Mesh(
      new THREE.SphereGeometry(1 + (i % 3) * 0.5, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 })
    );
    cloud.position.set((i * 7) % 40 - 20, 6 + (i % 4) * 2, i * 6 - 4);
    cloud.scale.y = 0.6;
    group.add(cloud);
  }

  function getColliders() {
    const closed = gates.filter((g) => !g.open).map((g) => g.aabb);
    return platforms.concat(closed);
  }

  function openGate(i) {
    const gate = gates[i];
    if (!gate || gate.open) return;
    gate.open = true;
  }

  return { group, platforms, checkpoints, gates, goal, spawn, getColliders, openGate };
}
