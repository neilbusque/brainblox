// Quiz Arcade - a no-jumping activity (the "something else to do"). A run of 10
// rapid emoji questions; correct answers earn stars, coins, and XP toward your
// level, with streak bonuses. Reuses the quiz modal, HUD, and progression so
// progress carries across both activities.

import "./style.css";
import { getQuestion } from "./questions.js";
import { createQuiz } from "./quiz.js";
import { createHud } from "./hud.js";
import { createProgress } from "./progress.js";
import { sfx, unlockAudio } from "./audio.js";
import { setupFullscreen } from "./fullscreen.js";

const TOTAL = 10;

export function startArcade() {
  unlockAudio();
  const arcade = document.getElementById("arcade");
  const hud = createHud();
  const quiz = createQuiz();
  const progress = createProgress();

  // show the arcade backdrop + a slimmed HUD (stars/coins/level only)
  arcade.classList.remove("hidden");
  document.getElementById("hud").classList.remove("hidden");
  document.getElementById("touch-controls")?.classList.add("hidden");
  document.getElementById("room-badge")?.classList.add("hidden");
  document.getElementById("btn-mute")?.classList.add("hidden");
  setupFullscreen("btn-fs");

  hud.setLevel(progress.info());
  hud.setCoins(0);

  const qEl = document.getElementById("arcade-q");
  const totalEl = document.getElementById("arcade-total");
  const result = document.getElementById("arcade-result");
  const head = arcade.querySelector(".arcade-head");
  totalEl.textContent = String(TOTAL);

  let stars = 0;
  let coins = 0;
  let streak = 0;

  function awardXp(amount) {
    const res = progress.addXp(amount);
    hud.setLevel(res.info);
    if (res.leveledUp) {
      hud.popLevel();
      hud.showFlash(`Level ${res.level}! 🎉`, 1100);
      sfx.levelup();
    }
  }

  async function run() {
    let correctCount = 0;
    for (let i = 0; i < TOTAL; i++) {
      qEl.textContent = String(i + 1);
      const difficulty = Math.floor(i / 3); // ramps up a little
      const correct = await quiz.ask(getQuestion(difficulty), { progress: i / TOTAL });
      if (correct) {
        correctCount++;
        streak++;
        stars++;
        coins += 2;
        hud.addStar();
        hud.setCoins(coins);
        sfx.correct();
        awardXp(15);
        if (streak % 3 === 0) {
          stars++;
          hud.addStar();
          awardXp(15);
          hud.showFlash(`${streak} in a row! Bonus ⭐`, 1100);
        }
      } else {
        streak = 0;
        sfx.wrong();
      }
      await sleep(350);
    }
    showResult(correctCount);
  }

  function showResult(correctCount) {
    head.classList.add("hidden");
    document.getElementById("arcade-result-emoji").textContent = correctCount >= 8 ? "🏆" : correctCount >= 5 ? "🎉" : "👍";
    document.getElementById("arcade-result-title").textContent =
      correctCount >= 8 ? "Amazing!" : correctCount >= 5 ? "Great job!" : "Good try!";
    document.getElementById("arcade-result-sub").innerHTML =
      `You got <b>${correctCount} / ${TOTAL}</b> right!<br>⭐ ${stars} stars · 🪙 ${coins} coins · Level ${progress.info().level}`;
    result.classList.remove("hidden");
    sfx.win();
  }

  document.getElementById("btn-arcade-again").addEventListener("click", () => location.reload());
  document.getElementById("btn-arcade-menu").addEventListener("click", () => location.reload());

  run();
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
