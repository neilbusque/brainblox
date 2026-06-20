// Fullscreen toggle that works across desktop + mobile Safari/Chrome, plus a
// best-effort landscape orientation lock. Falls back gracefully where the APIs
// are missing (iOS Safari has no Element.requestFullscreen, so we just rely on
// the CSS 100dvh layout there).

export function setupFullscreen(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  const el = document.documentElement;

  function isFs() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }

  async function enter() {
    try {
      if (el.requestFullscreen) await el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } catch {
      /* ignore - not supported (e.g. iOS Safari) */
    }
    try {
      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock("landscape");
      }
    } catch {
      /* orientation lock not allowed - fine */
    }
  }

  async function exit() {
    try {
      if (document.exitFullscreen) await document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    } catch {
      /* ignore */
    }
  }

  btn.addEventListener("click", () => {
    if (isFs()) exit();
    else enter();
  });
}
