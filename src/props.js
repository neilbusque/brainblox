// Decorative life for the world: drifting clouds, low-poly toon trees + balloons
// near checkpoints, a floating coin trail, plus transient win-confetti and
// correct-answer sparkles. All decoration, no collision. Shares geometry and
// materials per type and scales counts down on low-end devices via `density`.

import * as THREE from "three";
import { toonMat, roundedGeo, markBloom } from "./gfx.js";

export function createProps(scene, world, density = 1) {
  const group = new THREE.Group();
  scene.add(group);

  const clouds = [];
  const coins = [];
  const balloons = [];
  const transients = []; // { obj, age, ttl, tick }

  // ---- clouds (icosahedron lumps) ----
  const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cloudGeo = new THREE.IcosahedronGeometry(1, 0);
  const cloudCount = Math.round(16 * density);
  for (let i = 0; i < cloudCount; i++) {
    const cluster = new THREE.Group();
    const lumps = 3 + (i % 2);
    for (let j = 0; j < lumps; j++) {
      const m = new THREE.Mesh(cloudGeo, cloudMat);
      m.position.set(j * 1.1 - lumps * 0.5, (j % 2) * 0.3, (j % 2) * 0.4);
      m.scale.set(1 + (j % 2) * 0.5, 0.7, 1 + (j % 2) * 0.4);
      cluster.add(m);
    }
    cluster.position.set((i * 11) % 60 - 30, 7 + (i % 4) * 2.5, i * 9 - 6);
    cluster.userData.speed = 0.3 + (i % 3) * 0.15;
    group.add(cluster);
    clouds.push(cluster);
  }

  // ---- coin trail over the gaps between checkpoints ----
  const coinMat = new THREE.MeshBasicMaterial({ color: 0xffcf3a });
  const coinGeo = new THREE.TorusGeometry(0.22, 0.09, 8, 16);
  if (density > 0.5) {
    const cps = world.checkpoints;
    for (let i = 0; i < cps.length; i++) {
      const a = i === 0 ? world.spawn : cps[i - 1].pos;
      const b = cps[i].pos;
      for (let k = 1; k <= 3; k++) {
        const t = k / 4;
        const coin = new THREE.Mesh(coinGeo, coinMat);
        coin.position.set(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t + 1.4, a.z + (b.z - a.z) * t);
        coin.userData.phase = i + k;
        markBloom(coin);
        group.add(coin);
        coins.push(coin);
      }
    }
  }

  // ---- trees + balloons near each checkpoint ----
  const trunkMat = toonMat(0x9a6b4f);
  const trunkGeo = new THREE.CylinderGeometry(0.16, 0.22, 1, 7);
  const leafGeoA = new THREE.IcosahedronGeometry(0.7, 0);
  const leafGeoB = new THREE.IcosahedronGeometry(0.5, 0);
  const leafMatA = toonMat(0x6bd66a, { flatShading: true });
  const leafMatB = toonMat(0x4fb85c, { flatShading: true });
  const balloonGeo = new THREE.SphereGeometry(0.34, 12, 12);
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
  const lineGeo = new THREE.CylinderGeometry(0.01, 0.01, 1.2, 4);

  function tree(x, y, z, s) {
    const tg = new THREE.Group();
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 0.5;
    trunk.castShadow = true;
    const l1 = new THREE.Mesh(leafGeoA, leafMatA);
    l1.position.y = 1.25;
    l1.castShadow = true;
    const l2 = new THREE.Mesh(leafGeoB, leafMatB);
    l2.position.set(0.2, 1.7, 0.1);
    tg.add(trunk, l1, l2);
    tg.position.set(x, y, z);
    tg.scale.setScalar(s);
    group.add(tg);
  }

  for (const cp of world.checkpoints) {
    if (density > 0.5) {
      tree(-3.0, cp.pos.y - 1, cp.pos.z, 0.9 + (cp.index % 2) * 0.3);
      tree(3.0, cp.pos.y - 1, cp.pos.z - 0.6, 0.8 + (cp.index % 3) * 0.2);
    }
    // two balloons in the section color
    const hue = [0xff8e72, 0x5fc6f0, 0x5fd69a, 0xffd45e, 0xbfa1ff, 0xff94bc][cp.index % 6];
    for (const sx of [-1.4, 1.4]) {
      const bg = new THREE.Group();
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.position.y = 0.6;
      const ball = new THREE.Mesh(balloonGeo, toonMat(hue));
      ball.scale.y = 1.2;
      ball.position.y = 1.5;
      bg.add(line, ball);
      bg.position.set(cp.pos.x + sx, cp.pos.y, cp.pos.z + 0.5);
      bg.userData.phase = cp.index + sx;
      group.add(bg);
      balloons.push(bg);
    }
  }

  // ---- transient bursts ----
  function spawnSparkle(pos) {
    const n = 14;
    const positions = new Float32Array(n * 3);
    const vel = [];
    for (let i = 0; i < n; i++) {
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
      const a = (i / n) * Math.PI * 2;
      vel.push(new THREE.Vector3(Math.cos(a) * 2, 3 + Math.random() * 2, Math.sin(a) * 2));
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.22, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    markBloom(pts);
    group.add(pts);
    transients.push({
      obj: pts, age: 0, ttl: 0.7,
      tick(dt, age) {
        const arr = geo.attributes.position.array;
        for (let i = 0; i < n; i++) {
          arr[i * 3] += vel[i].x * dt;
          arr[i * 3 + 1] += (vel[i].y - age * 6) * dt;
          arr[i * 3 + 2] += vel[i].z * dt;
        }
        geo.attributes.position.needsUpdate = true;
        pts.material.opacity = 1 - age / 0.7;
      },
    });
  }

  function spawnConfetti(center) {
    const colors = [0xff8e72, 0x5fc6f0, 0x5fd69a, 0xffd45e, 0xbfa1ff, 0xff94bc];
    const n = Math.round(50 * density);
    const geo = new THREE.PlaneGeometry(0.18, 0.18);
    const inst = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, vertexColors: false }), n);
    const dummy = new THREE.Object3D();
    const data = [];
    const col = new THREE.Color();
    for (let i = 0; i < n; i++) {
      data.push({
        x: center.x + (Math.random() - 0.5) * 5,
        y: center.y + 5 + Math.random() * 3,
        z: center.z + (Math.random() - 0.5) * 5,
        vy: -2 - Math.random() * 2,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 8,
        spin: Math.random() * Math.PI,
      });
      inst.setColorAt(i, col.set(colors[i % colors.length]));
    }
    group.add(inst);
    transients.push({
      obj: inst, age: 0, ttl: 2.4,
      tick(dt) {
        for (let i = 0; i < n; i++) {
          const d = data[i];
          d.y += d.vy * dt;
          d.rot += d.vr * dt;
          dummy.position.set(d.x, d.y, d.z);
          dummy.rotation.set(d.rot, d.spin, d.rot * 0.5);
          dummy.updateMatrix();
          inst.setMatrixAt(i, dummy.matrix);
        }
        inst.instanceMatrix.needsUpdate = true;
      },
    });
  }

  function update(dt, t) {
    for (const c of clouds) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 36) c.position.x = -36;
    }
    for (const coin of coins) {
      coin.rotation.y += dt * 2.5;
      coin.position.y += Math.sin(t * 2 + coin.userData.phase) * dt * 0.4;
    }
    for (const b of balloons) {
      b.rotation.z = Math.sin(t * 1.3 + b.userData.phase) * 0.12;
    }
    for (let i = transients.length - 1; i >= 0; i--) {
      const tr = transients[i];
      tr.age += dt;
      tr.tick(dt, tr.age);
      if (tr.age >= tr.ttl) {
        group.remove(tr.obj);
        tr.obj.geometry?.dispose?.();
        tr.obj.material?.dispose?.();
        transients.splice(i, 1);
      }
    }
  }

  return { group, update, spawnSparkle, spawnConfetti };
}
