// Achievements & Badges system. Tracks gameplay milestones across all modes and
// awards collectible badges. State persists in localStorage. Fire events from
// game modes via `onEvent(name, data)` or call `check()` with current stats.

import { sfx } from "./audio.js";

const K_UNLOCKED = "bb_achievements";
const K_TIMES = "bb_ach_times";
const K_STATS = "bb_ach_stats";

// ---- achievement registry ----
const ACHIEVEMENTS = [
  // Getting Started
  { id: "first_obby", title: "First Steps", desc: "Complete your first obby", emoji: "👟", category: "Getting Started", event: "obby_complete" },
  { id: "quiz_10", title: "Quiz Whiz", desc: "Answer 10 questions right", emoji: "🧠", category: "Getting Started", stat: "totalCorrect", threshold: 10 },
  { id: "first_puzzle", title: "Puzzle Master", desc: "Complete a jigsaw puzzle", emoji: "🧩", category: "Getting Started", event: "puzzle_complete" },
  { id: "first_lesson", title: "Speed Reader", desc: "Complete a Learn lesson", emoji: "📖", category: "Getting Started", event: "lesson_complete" },

  // Skill Milestones
  { id: "stars_25", title: "Star Collector", desc: "Earn 25 stars total", emoji: "⭐", category: "Skill Milestones", stat: "totalStars", threshold: 25 },
  { id: "coins_100", title: "Coin Hoarder", desc: "Save up 100 coins", emoji: "💰", category: "Skill Milestones", stat: "peakCoins", threshold: 100 },
  { id: "level_5", title: "Level 5", desc: "Reach level 5", emoji: "🎯", category: "Skill Milestones", stat: "level", threshold: 5 },
  { id: "level_10", title: "Level 10", desc: "Reach level 10", emoji: "🏅", category: "Skill Milestones", stat: "level", threshold: 10 },
  { id: "perfect_run", title: "Perfect Run", desc: "Finish an obby with zero wrong answers", emoji: "💎", category: "Skill Milestones", event: "obby_perfect" },
  { id: "streak_5", title: "Streak Star", desc: "Get a 5-question streak", emoji: "🔥", category: "Skill Milestones", stat: "bestStreak", threshold: 5 },

  // Explorer Badges
  { id: "world_walker", title: "World Walker", desc: "Visit every building in the Explore World", emoji: "🗺️", category: "Explorer Badges", stat: "buildingsVisited", threshold: 8 },
  { id: "hat_3", title: "Hat Collector", desc: "Own 3 hats", emoji: "🎩", category: "Explorer Badges", stat: "hatsOwned", threshold: 3 },
  { id: "hat_all", title: "Fashion Icon", desc: "Own every hat", emoji: "👗", category: "Explorer Badges", stat: "hatsOwned", threshold: 7 },
  { id: "social", title: "Social Butterfly", desc: "Join a multiplayer room", emoji: "🦋", category: "Explorer Badges", event: "room_join" },

  // Challenge Badges
  { id: "coinrush_20", title: "Coin Rush Pro", desc: "Grab 20+ coins in Coin Rush", emoji: "🪙", category: "Challenge Badges", stat: "coinRushBest", threshold: 20 },
  { id: "maze_done", title: "Maze Runner", desc: "Solve the maze", emoji: "🌀", category: "Challenge Badges", event: "maze_complete" },
  { id: "brain_50", title: "Brain Power", desc: "Answer 50 questions right", emoji: "⚡", category: "Challenge Badges", stat: "totalCorrect", threshold: 50 },
  { id: "brain_100", title: "Scholar", desc: "Answer 100 questions right", emoji: "🎓", category: "Challenge Badges", stat: "totalCorrect", threshold: 100 },
  { id: "dedicated", title: "Dedicated", desc: "Play on 10 different days", emoji: "📅", category: "Challenge Badges", stat: "sessionsPlayed", threshold: 10 },
];

// ---- localStorage helpers ----
function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}
function saveJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* storage may be unavailable */ }
}

function defaultStats() {
  return {
    totalCorrect: 0,
    totalStars: 0,
    peakCoins: 0,
    level: 1,
    sessionsPlayed: 0,
    buildingsVisited: 0,
    hatsOwned: 2, // "none" + "cap" are free
    bestStreak: 0,
    coinRushBest: 0,
    obbyCompletions: 0,
    puzzlesCompleted: 0,
    lessonsCompleted: 0,
    lastSessionDate: null,
    visitedBuildings: [],
  };
}

// ---- module state ----
let unlocked = loadJSON(K_UNLOCKED, []);
let times = loadJSON(K_TIMES, {});
let stats = { ...defaultStats(), ...loadJSON(K_STATS, {}) };
let toastCb = null; // set by mountToast

// ---- public API ----

export function getAchievements() { return ACHIEVEMENTS; }
export function getUnlocked() { return unlocked; }
export function getUnlockTime(id) { return times[id] || null; }
export function getStats() { return stats; }

export function isUnlocked(id) { return unlocked.includes(id); }

export function setToastCallback(cb) { toastCb = cb; }

function unlock(id) {
  if (unlocked.includes(id)) return false;
  unlocked.push(id);
  times[id] = Date.now();
  saveJSON(K_UNLOCKED, unlocked);
  saveJSON(K_TIMES, times);
  const ach = ACHIEVEMENTS.find((a) => a.id === id);
  if (ach) {
    sfx.achievement();
    if (toastCb) toastCb(ach);
  }
  return true;
}

function saveStat(key, value) {
  stats[key] = value;
  saveJSON(K_STATS, stats);
}

// check all stat-based achievements against current stats
function checkStatAchievements() {
  for (const ach of ACHIEVEMENTS) {
    if (ach.stat && !isUnlocked(ach.id)) {
      const val = ach.stat === "buildingsVisited" ? (stats.visitedBuildings || []).length : stats[ach.stat];
      if (val >= ach.threshold) unlock(ach.id);
    }
  }
}

// fire from game modes when notable things happen
export function onEvent(name, data) {
  switch (name) {
    case "correct_answer":
      saveStat("totalCorrect", stats.totalCorrect + 1);
      break;
    case "star_earned":
      saveStat("totalStars", stats.totalStars + 1);
      break;
    case "coins_changed": {
      const coins = data?.coins ?? 0;
      if (coins > stats.peakCoins) saveStat("peakCoins", coins);
      break;
    }
    case "level_up":
      saveStat("level", data?.level ?? stats.level);
      break;
    case "streak": {
      const s = data?.streak ?? 0;
      if (s > stats.bestStreak) saveStat("bestStreak", s);
      break;
    }
    case "obby_complete":
      saveStat("obbyCompletions", stats.obbyCompletions + 1);
      break;
    case "obby_perfect":
      // handled by event-based achievements below
      break;
    case "puzzle_complete":
      saveStat("puzzlesCompleted", stats.puzzlesCompleted + 1);
      break;
    case "lesson_complete":
      saveStat("lessonsCompleted", stats.lessonsCompleted + 1);
      break;
    case "coinrush_end": {
      const score = data?.score ?? 0;
      if (score > stats.coinRushBest) saveStat("coinRushBest", score);
      break;
    }
    case "maze_complete":
      break;
    case "room_join":
      break;
    case "building_visit": {
      const key = data?.key;
      if (key && !(stats.visitedBuildings || []).includes(key)) {
        const visited = [...(stats.visitedBuildings || []), key];
        saveStat("visitedBuildings", visited);
      }
      break;
    }
    case "hat_bought":
      saveStat("hatsOwned", (stats.hatsOwned || 2) + 1);
      break;
    case "session_start": {
      const today = new Date().toISOString().slice(0, 10);
      if (stats.lastSessionDate !== today) {
        saveStat("sessionsPlayed", stats.sessionsPlayed + 1);
        saveStat("lastSessionDate", today);
      }
      break;
    }
  }

  // event-based unlocks (one-shot events)
  for (const ach of ACHIEVEMENTS) {
    if (ach.event && ach.event === name && !isUnlocked(ach.id)) {
      unlock(ach.id);
    }
  }

  // stat-based unlocks
  checkStatAchievements();
}

// count of unlocked / total
export function progress() {
  return { unlocked: unlocked.length, total: ACHIEVEMENTS.length };
}

// categories in display order
export function categories() {
  const seen = [];
  for (const a of ACHIEVEMENTS) {
    if (!seen.includes(a.category)) seen.push(a.category);
  }
  return seen;
}
