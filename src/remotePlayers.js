// Renders other players' avatars and smooths their motion. Network packets only
// arrive ~12 Hz, so we interpolate each avatar toward its latest target position
// every frame, which makes remote characters glide instead of teleport.

import * as THREE from "three";
import { createAvatar } from "./avatar.js";

export function createRemotePlayers() {
  const group = new THREE.Group();
  const peers = new Map(); // id -> { avatar, cur:{x,y,z}, target:{x,y,z}, ry, anim, name, color }

  function ensure(id, name, color) {
    let p = peers.get(id);
    if (!p) {
      const avatar = createAvatar(color, name || "Player");
      group.add(avatar.root);
      p = {
        avatar,
        cur: { x: 0, y: -50, z: 0 },
        target: { x: 0, y: -50, z: 0 },
        ry: 0,
        targetRy: 0,
        anim: "idle",
        name,
        color,
      };
      peers.set(id, p);
    }
    return p;
  }

  // a state packet from the network: { id, x, y, z, ry, anim }
  function applyState(packet) {
    const p = peers.get(packet.id);
    if (!p) return; // roster will create it on presence sync
    p.target = { x: packet.x, y: packet.y, z: packet.z };
    p.targetRy = packet.ry ?? p.targetRy;
    p.anim = packet.anim || "idle";
  }

  // reconcile to the presence roster (others only - caller filters out self)
  function syncRoster(others) {
    const ids = new Set(others.map((o) => o.id));
    for (const o of others) ensure(o.id, o.name, o.color);
    for (const id of [...peers.keys()]) {
      if (!ids.has(id)) remove(id);
    }
  }

  function remove(id) {
    const p = peers.get(id);
    if (!p) return;
    group.remove(p.avatar.root);
    p.avatar.root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      // never dispose materials flagged as shared (e.g. the outline material) -
      // other avatars still use them.
      if (o.material && !o.material.userData?.shared) o.material.dispose();
    });
    peers.delete(id);
  }

  function update(dt, camera) {
    const k = 1 - Math.pow(0.0001, dt); // smoothing toward target
    for (const p of peers.values()) {
      p.cur.x += (p.target.x - p.cur.x) * k;
      p.cur.y += (p.target.y - p.cur.y) * k;
      p.cur.z += (p.target.z - p.cur.z) * k;
      // shortest-path angle lerp
      let d = p.targetRy - p.ry;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      p.ry += d * k;
      p.avatar.root.position.set(p.cur.x, p.cur.y, p.cur.z);
      p.avatar.root.rotation.y = p.ry;
      p.avatar.update(p.anim, dt, camera);
    }
  }

  return { group, ensure, applyState, syncRoster, remove, update, count: () => peers.size };
}
