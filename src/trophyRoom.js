// Trophy Room - view all achievements and badges. Unlocked badges show in full
// color with emoji, title, and date. Locked ones are greyed-out placeholders.
// Organized by category with a progress counter at the top.

import { getAchievements, getUnlocked, getUnlockTime, progress, categories, isUnlocked } from "./achievements.js";
import { sfx } from "./audio.js";

export function startTrophyRoom(onHome) {
  const root = document.getElementById("trophies");
  root.classList.remove("hidden");
  document.getElementById("hud")?.classList.add("hidden");
  document.getElementById("btn-home")?.classList.remove("hidden");

  render();

  function render() {
    const prog = progress();
    const cats = categories();
    const achievements = getAchievements();

    root.innerHTML = `
      <div class="trophy-wrap">
        <h1 class="trophy-title">🏆 Trophy Room</h1>
        <div class="trophy-progress">${prog.unlocked} / ${prog.total} Badges Earned</div>
        <div class="trophy-bar">
          <div class="trophy-bar-fill" style="width:${Math.round((prog.unlocked / prog.total) * 100)}%"></div>
        </div>
        ${cats.map((cat) => `
          <div class="trophy-cat">${cat}</div>
          <div class="trophy-grid">
            ${achievements.filter((a) => a.category === cat).map((a) => {
              const got = isUnlocked(a.id);
              const time = getUnlockTime(a.id);
              const dateStr = time ? new Date(time).toLocaleDateString() : "";
              return `
                <div class="trophy-badge ${got ? "earned" : "locked"}">
                  <div class="tb-emoji">${got ? a.emoji : "❓"}</div>
                  <div class="tb-title">${got ? a.title : "???"}</div>
                  <div class="tb-desc">${got ? a.desc : "Keep playing to find out!"}</div>
                  ${got ? `<div class="tb-date">${dateStr}</div>` : ""}
                </div>`;
            }).join("")}
          </div>
        `).join("")}
      </div>`;
  }

  function destroy() {
    root.innerHTML = "";
    root.classList.add("hidden");
    document.getElementById("btn-home")?.classList.add("hidden");
  }

  return { destroy };
}
