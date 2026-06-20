// Third-person follow camera. Sits behind + above the player and eases toward a
// target spot each frame so motion feels smooth. Exposes `yaw` so main.js can
// convert camera-relative input into world-space movement.

import * as THREE from "three";

export function createFollowCamera(aspect) {
  const cam = new THREE.PerspectiveCamera(60, aspect, 0.1, 500);
  const yaw = 0; // fixed behind-the-player angle (no orbit, simplest for kids)
  const state = { yaw };

  const DIST = 9;
  const HEIGHT = 5.5;
  const tmpTarget = new THREE.Vector3();
  const tmpLook = new THREE.Vector3();

  function follow(playerPos, dt) {
    // desired camera position: behind (−z) and above the player
    tmpTarget.set(
      playerPos.x - Math.sin(state.yaw) * DIST,
      playerPos.y + HEIGHT,
      playerPos.z - Math.cos(state.yaw) * DIST
    );
    // exponential smoothing toward the target
    const k = 1 - Math.pow(0.001, dt);
    cam.position.lerp(tmpTarget, k);
    tmpLook.set(playerPos.x, playerPos.y + 1, playerPos.z);
    cam.lookAt(tmpLook);
  }

  function snap(playerPos) {
    cam.position.set(
      playerPos.x - Math.sin(state.yaw) * DIST,
      playerPos.y + HEIGHT,
      playerPos.z - Math.cos(state.yaw) * DIST
    );
    cam.lookAt(playerPos.x, playerPos.y + 1, playerPos.z);
  }

  return { cam, state, follow, snap };
}

// Convert camera-relative intent (fwd/right) into a world-space direction,
// given the camera yaw. fwd = away from camera, right = the player's right as
// seen on screen. With the camera looking toward +z, screen-right is -x, so the
// right axis is negated (this fixes the "press left, moves right" bug).
export function intentToWorld(fwd, right, yaw) {
  const sin = Math.sin(yaw);
  const cos = Math.cos(yaw);
  const x = fwd * sin - right * cos;
  const z = fwd * cos + right * sin;
  return { x, z };
}
