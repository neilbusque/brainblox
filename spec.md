# BrainBlox - Achievements & Badges System (Delta Spec)

## One-line summary

A collectible achievements system where kids earn badges for gameplay milestones, viewable in a new Trophy Room accessible from the Explore World hub.

## What exists today

- XP and levels (progress.js) - persisted in localStorage
- Coins and avatar customization (profile.js) - persisted in localStorage
- Multiple game modes: Obby, Quiz Arcade, Jigsaw Puzzles, Learn, Coin Rush, Maze
- Closet for hat shopping
- 3D Explore World hub with building portals (explore.js)
- HUD with stars, coins, level display (hud.js)

## New capability

An achievements/badges system that rewards kids for reaching gameplay milestones across all game modes. Achievements are persistent (localStorage), display as collectible badges in a dedicated Trophy Room, and trigger celebratory toast notifications when earned.

## Core features (MVP)

### 1. Achievement definitions (achievements.js)

A static registry of ~20 achievements across categories:

**Getting Started**
- First Steps: Complete your first obby
- Quiz Whiz: Answer 10 questions correctly (cumulative)
- Puzzle Master: Complete your first jigsaw puzzle
- Speed Reader: Complete a Learn lesson

**Skill Milestones**
- Star Collector: Earn 25 stars total
- Coin Hoarder: Accumulate 100 coins
- Level 5: Reach level 5
- Level 10: Reach level 10
- Perfect Run: Complete an obby with all correct answers (no wrong answers)
- Streak Star: Get a 5-question streak in Quiz Arcade

**Explorer Badges**
- World Walker: Visit all buildings in the Explore World
- Hat Collector: Own 3 hats
- Fashion Icon: Own all hats
- Social Butterfly: Join a multiplayer room

**Challenge Badges**
- Coin Rush Pro: Score 50+ coins in Coin Rush
- Maze Runner: Complete the maze
- Brain Power: Answer 50 questions correctly (cumulative)
- Scholar: Answer 100 questions correctly (cumulative)
- Dedicated: Play 10 sessions (days with at least one activity)

Each achievement has: id, title, description, emoji icon, category, and a check function or event-based trigger.

### 2. Achievement state & engine (achievements.js)

- `getUnlocked()` - returns array of unlocked achievement ids from localStorage
- `unlock(id)` - marks an achievement as unlocked with timestamp, returns true if newly unlocked
- `check(stats)` - given current player stats, checks all stat-based achievements and unlocks any newly met
- `onEvent(event, data)` - called by game modes when notable events happen (e.g. "obby_complete", "quiz_correct", "maze_complete")
- Stats tracked in localStorage: totalCorrect, totalStars, totalCoins (high watermark), sessionsPlayed, buildingsVisited, obbyCompletions, perfectRuns, bestStreak, mazeCompleted, coinRushBest

### 3. Trophy Room screen (trophyRoom.js)

- A new screen (DOM-based like Closet) showing all achievements in a grid
- Unlocked badges show in full color with emoji, title, and unlock date
- Locked badges show as greyed-out silhouettes with "???" description
- Organized by category with headers
- Shows progress counter: "12 / 20 Badges Earned"
- Accessible from the Explore World as a new building zone (trophy/medal building)

### 4. Achievement toast notifications

- When an achievement is newly unlocked, a toast slides in from the top with the badge emoji, title, and a celebratory sound
- Toast auto-dismisses after 3 seconds
- Uses the existing sfx system for the celebration sound
- Works across all game modes (obby, arcade, puzzles, etc.)

### 5. Integration points

- **explore.js**: Add "Trophy Room" building to ZONES array (key: "trophies")
- **main.js**: Add startTrophyRoom to LAUNCHERS, wire achievement event listeners
- **index.html**: Add `<div id="trophies" class="screen hidden"></div>` and toast container
- **style.css**: Trophy room grid styles, toast animation, badge cards
- **arcade.js**: Fire achievement events on streak, completion
- **world.js / main.js (obby)**: Fire events on obby complete, perfect run
- **puzzles.js**: Fire event on puzzle complete
- **learn.js**: Fire event on lesson complete
- **coinrush.js**: Fire event with score on completion
- **maze.js**: Fire event on maze complete
- **closet.js**: Check hat collection achievements on purchase
- **profile.js**: No changes needed, read coins/hats via existing exports
- **progress.js**: No changes needed, read level via existing exports
- **lobby.js**: Increment session counter on boot

## Data model

All localStorage, no Supabase needed:

```
bb_achievements = ["first_obby", "quiz_10", ...]   // array of unlocked ids
bb_ach_times = {"first_obby": 1718900000, ...}       // unlock timestamps
bb_ach_stats = {                                      // cumulative stats
  totalCorrect: 0,
  totalStars: 0,
  sessionsPlayed: 0,
  buildingsVisited: [],
  obbyCompletions: 0,
  perfectRuns: 0,
  bestStreak: 0,
  mazeCompleted: false,
  coinRushBest: 0,
  puzzlesCompleted: 0,
  lessonsCompleted: 0
}
```

## Routes / Screens

- Trophy Room: new screen at `#trophies`, launched from explore world building
- No new routes, follows existing screen pattern (show/hide divs)

## Stack

Vanilla JS (matches existing codebase). DOM-based UI. localStorage persistence. No new dependencies.

## Acceptance criteria

1. Trophy Room building appears in Explore World and is enterable
2. Trophy Room displays all ~20 achievements in a categorized grid
3. Unlocked badges show emoji + title + date; locked ones show greyed placeholders
4. Completing an obby unlocks "First Steps" badge with toast notification
5. Answering 10 cumulative correct answers unlocks "Quiz Whiz"
6. Toast notification appears with sound when any achievement is newly earned
7. Achievement state persists across browser sessions (localStorage)
8. Progress counter shows X/N badges earned
9. All game modes fire appropriate achievement events
10. `npm run build` succeeds with no errors
11. Existing game modes continue to work without regression
