// Unifies keyboard and on-screen touch input into one shape the game loop reads
// every frame: { fwd, right, jump }. fwd/right are camera-relative intents in
// -1..1; main.js rotates them into world space using the camera yaw. `jump` is
// edge-triggered (true only on the frame it was pressed) and consumed on read.

export function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

export function createControls() {
  const keys = new Set();
  let jumpQueued = false;
  let enabled = true;

  // ---- keyboard ----
  const down = (e) => {
    const k = e.key.toLowerCase();
    if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) e.preventDefault();
    keys.add(k);
    if (k === " " || k === "w" || k === "arrowup") {
      // space jumps; W/Up also count as jump only via the space/jump path below
    }
    if (k === " ") jumpQueued = true;
  };
  const up = (e) => keys.delete(e.key.toLowerCase());
  window.addEventListener("keydown", down);
  window.addEventListener("keyup", up);

  // ---- touch joystick ----
  const joy = { active: false, id: null, x: 0, y: 0 }; // x,y in -1..1
  const stick = document.getElementById("joystick");
  const knob = document.getElementById("joystick-knob");
  const jumpBtn = document.getElementById("jump-btn");
  const RADIUS = 50; // px travel of the knob

  function setKnob(dx, dy) {
    if (knob) knob.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function joyStart(e) {
    const t = e.changedTouches ? e.changedTouches[0] : e;
    joy.active = true;
    joy.id = t.identifier ?? "mouse";
    joy.origin = { x: t.clientX, y: t.clientY };
    e.preventDefault();
  }
  function joyMove(e) {
    if (!joy.active) return;
    const touches = e.changedTouches ? [...e.changedTouches] : [e];
    const t = touches.find((tt) => (tt.identifier ?? "mouse") === joy.id);
    if (!t) return;
    let dx = t.clientX - joy.origin.x;
    let dy = t.clientY - joy.origin.y;
    const dist = Math.hypot(dx, dy);
    if (dist > RADIUS) {
      dx = (dx / dist) * RADIUS;
      dy = (dy / dist) * RADIUS;
    }
    setKnob(dx, dy);
    joy.x = dx / RADIUS; // right +
    joy.y = -dy / RADIUS; // up(screen) -> forward +
    e.preventDefault();
  }
  function joyEnd(e) {
    const touches = e.changedTouches ? [...e.changedTouches] : [e];
    if (touches.some((tt) => (tt.identifier ?? "mouse") === joy.id) || !e.changedTouches) {
      joy.active = false;
      joy.x = 0;
      joy.y = 0;
      setKnob(0, 0);
    }
  }

  if (stick) {
    stick.addEventListener("touchstart", joyStart, { passive: false });
    stick.addEventListener("touchmove", joyMove, { passive: false });
    stick.addEventListener("touchend", joyEnd);
    stick.addEventListener("touchcancel", joyEnd);
  }
  if (jumpBtn) {
    jumpBtn.addEventListener("touchstart", (e) => {
      jumpQueued = true;
      e.preventDefault();
    }, { passive: false });
  }

  // read camera-relative intent + consume the jump edge
  function getInput() {
    if (!enabled) {
      const j = jumpQueued;
      jumpQueued = false;
      return { fwd: 0, right: 0, jump: false };
    }
    let fwd = 0;
    let right = 0;
    if (keys.has("w") || keys.has("arrowup")) fwd += 1;
    if (keys.has("s") || keys.has("arrowdown")) fwd -= 1;
    if (keys.has("d") || keys.has("arrowright")) right += 1;
    if (keys.has("a") || keys.has("arrowleft")) right -= 1;

    // joystick overrides/augments
    fwd += joy.y;
    right += joy.x;
    fwd = Math.max(-1, Math.min(1, fwd));
    right = Math.max(-1, Math.min(1, right));

    const jump = jumpQueued;
    jumpQueued = false;
    return { fwd, right, jump };
  }

  return {
    getInput,
    setEnabled(v) {
      enabled = v;
      if (!v) {
        joy.active = false;
        joy.x = 0;
        joy.y = 0;
        setKnob(0, 0);
      }
    },
    destroy() {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    },
  };
}
