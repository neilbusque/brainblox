// ============================================================
//  BrainBlox question content
//  ----------------------------------------------------------
//  Questions come in a few flavors, all multiple-choice (tap to answer):
//    - Math       : auto-generated (+, -, x), scaled by difficulty
//    - Pictures   : emoji-based - name it, count it, tap the match, find the
//                   category. Generated from the PICTURES table below, so the
//                   answer is always guaranteed correct.
//    - Text bank  : curated reading/science/geography (the BANK array)
//
//  Each returned question is { topic, prompt, choices, correctIndex,
//    picture?, picCount?, choiceEmoji? }:
//    picture     - a big emoji (or string) shown above the prompt
//    picCount    - if set, the picture emoji is repeated this many times (counting)
//    choiceEmoji - true when the answer tiles are emoji instead of words
//
//  TO ADD YOUR OWN: add to BANK (text questions) or PICTURES (emoji words).
// ============================================================

// emoji + the word for it + a category, used to build picture questions.
export const PICTURES = [
  // animals
  { e: "🐶", name: "Dog", cat: "animal" },
  { e: "🐱", name: "Cat", cat: "animal" },
  { e: "🦁", name: "Lion", cat: "animal" },
  { e: "🐘", name: "Elephant", cat: "animal" },
  { e: "🐸", name: "Frog", cat: "animal" },
  { e: "🐝", name: "Bee", cat: "animal" },
  { e: "🐢", name: "Turtle", cat: "animal" },
  { e: "🐠", name: "Fish", cat: "animal" },
  { e: "🦆", name: "Duck", cat: "animal" },
  { e: "🦋", name: "Butterfly", cat: "animal" },
  { e: "🐧", name: "Penguin", cat: "animal" },
  { e: "🐴", name: "Horse", cat: "animal" },
  // food
  { e: "🍎", name: "Apple", cat: "food" },
  { e: "🍌", name: "Banana", cat: "food" },
  { e: "🍓", name: "Strawberry", cat: "food" },
  { e: "🍕", name: "Pizza", cat: "food" },
  { e: "🍦", name: "Ice cream", cat: "food" },
  { e: "🥕", name: "Carrot", cat: "food" },
  { e: "🍪", name: "Cookie", cat: "food" },
  { e: "🍉", name: "Watermelon", cat: "food" },
  { e: "🌽", name: "Corn", cat: "food" },
  { e: "🍇", name: "Grapes", cat: "food" },
  // vehicles
  { e: "🚗", name: "Car", cat: "vehicle" },
  { e: "🚌", name: "Bus", cat: "vehicle" },
  { e: "✈️", name: "Airplane", cat: "vehicle" },
  { e: "🚀", name: "Rocket", cat: "vehicle" },
  { e: "🚲", name: "Bike", cat: "vehicle" },
  { e: "🚂", name: "Train", cat: "vehicle" },
  { e: "⛵", name: "Boat", cat: "vehicle" },
  { e: "🚒", name: "Fire truck", cat: "vehicle" },
  // nature
  { e: "🌳", name: "Tree", cat: "nature" },
  { e: "🌸", name: "Flower", cat: "nature" },
  { e: "☀️", name: "Sun", cat: "nature" },
  { e: "🌙", name: "Moon", cat: "nature" },
  { e: "⭐", name: "Star", cat: "nature" },
  { e: "🌈", name: "Rainbow", cat: "nature" },
  { e: "❄️", name: "Snowflake", cat: "nature" },
  { e: "🍄", name: "Mushroom", cat: "nature" },
  // things
  { e: "⚽", name: "Soccer ball", cat: "thing" },
  { e: "🎈", name: "Balloon", cat: "thing" },
  { e: "🎁", name: "Present", cat: "thing" },
  { e: "🪁", name: "Kite", cat: "thing" },
  { e: "🧸", name: "Teddy bear", cat: "thing" },
  { e: "🎸", name: "Guitar", cat: "thing" },
  { e: "🔑", name: "Key", cat: "thing" },
  { e: "⏰", name: "Clock", cat: "thing" },
];

const CATEGORY_LABEL = { animal: "animal", food: "food you can eat", vehicle: "thing that goes", nature: "thing in nature", thing: "toy or object" };

export const BANK = [
  // ---- Reading / Spelling ----
  { topic: "Reading", prompt: "Which word means a baby dog?", choices: ["Puppy", "Kitten", "Calf", "Chick"], correctIndex: 0, minLevel: 0 },
  { topic: "Reading", prompt: "Which word is spelled correctly?", choices: ["Frend", "Friend", "Freind", "Frynd"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "What is the opposite of 'hot'?", choices: ["Warm", "Cold", "Fast", "Big"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "Which word rhymes with 'cat'?", choices: ["Dog", "Hat", "Cup", "Sun"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "What is the opposite of 'happy'?", choices: ["Sad", "Glad", "Funny", "Tall"], correctIndex: 0, minLevel: 0 },
  { topic: "Reading", prompt: "Which word means 'very big'?", choices: ["Tiny", "Huge", "Soft", "Slow"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "Which word is spelled correctly?", choices: ["Becuase", "Because", "Becuse", "Becouse"], correctIndex: 1, minLevel: 1 },
  { topic: "Reading", prompt: "Which word is plural (more than one)?", choices: ["Cat", "Dogs", "House", "Tree"], correctIndex: 1, minLevel: 1 },

  // ---- Science / Animals / Body ----
  { topic: "Science", prompt: "What do plants need to grow?", choices: ["Candy", "Sunlight", "Toys", "Rocks"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "How many legs does a spider have?", choices: ["6", "8", "4", "10"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "What do bees make?", choices: ["Milk", "Honey", "Bread", "Silk"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "A caterpillar turns into a...", choices: ["Spider", "Butterfly", "Bird", "Fish"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "How many days are in one week?", choices: ["5", "7", "10", "12"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "What do we breathe to stay alive?", choices: ["Water", "Air", "Sand", "Juice"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "Which season is the coldest?", choices: ["Summer", "Winter", "Spring", "Fall"], correctIndex: 1, minLevel: 0 },

  // ---- Geography ----
  { topic: "Geography", prompt: "What is the capital of France?", choices: ["Paris", "Rome", "London", "Madrid"], correctIndex: 0, minLevel: 1 },
  { topic: "Geography", prompt: "How many continents are there?", choices: ["5", "7", "10", "3"], correctIndex: 1, minLevel: 1 },
  { topic: "Geography", prompt: "What do we call a very tall hill?", choices: ["Valley", "Mountain", "Field", "Cave"], correctIndex: 1, minLevel: 0 },
  { topic: "Geography", prompt: "Which place is covered in ice and snow?", choices: ["Antarctica", "Africa", "India", "Mexico"], correctIndex: 0, minLevel: 2 },
];

// ---------- small helpers ----------
function shuffle(arr, rng) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function pick(arr, rng) {
  return arr[Math.floor(rng() * arr.length)];
}
function sampleDistinct(arr, n, exclude, rng) {
  const pool = arr.filter((x) => x !== exclude);
  shuffle(pool, rng);
  return pool.slice(0, n);
}

// ---------- math ----------
function buildNumberChoices(answer, rng) {
  const set = new Set([answer]);
  let guard = 0;
  while (set.size < 4 && guard++ < 50) {
    const delta = (1 + Math.floor(rng() * 5)) * (rng() < 0.5 ? -1 : 1);
    const cand = answer + delta;
    if (cand >= 0) set.add(cand);
  }
  let pad = answer + 10;
  while (set.size < 4) set.add(pad++);
  return shuffle([...set], rng);
}

function makeMath(level, rng) {
  const r = (n) => Math.floor(rng() * n);
  let a, b, op, answer;
  if (level >= 4 && rng() < 0.6) {
    a = 2 + r(8);
    b = 2 + r(8);
    op = "×";
    answer = a * b;
  } else {
    const max = level <= 1 ? 12 : level <= 3 ? 25 : 50;
    a = 1 + r(max);
    b = 1 + r(max);
    if (rng() < 0.5) {
      op = "+";
      answer = a + b;
    } else {
      if (b > a) [a, b] = [b, a];
      op = "−";
      answer = a - b;
    }
  }
  const choices = buildNumberChoices(answer, rng);
  return { topic: "Math", prompt: `${a} ${op} ${b} = ?`, choices: choices.map(String), correctIndex: choices.indexOf(answer) };
}

// ---------- picture questions ----------
function makeCount(level, rng) {
  const item = pick(PICTURES, rng);
  const n = 2 + Math.floor(rng() * (level <= 1 ? 5 : 8)); // 2..6 or 2..9
  const choices = buildNumberChoices(n, rng).map(String);
  return {
    topic: "Counting",
    prompt: "How many do you see?",
    picture: item.e,
    picCount: n,
    choices,
    correctIndex: choices.indexOf(String(n)),
  };
}

function makeNamePicture(rng) {
  const item = pick(PICTURES, rng);
  const distractors = sampleDistinct(PICTURES, 3, item, rng).map((p) => p.name);
  const choices = shuffle([item.name, ...distractors], rng);
  return {
    topic: "Pictures",
    prompt: "What is this?",
    picture: item.e,
    choices,
    correctIndex: choices.indexOf(item.name),
  };
}

function makeTapPicture(rng) {
  const item = pick(PICTURES, rng);
  const distractors = sampleDistinct(PICTURES, 3, item, rng).map((p) => p.e);
  const choices = shuffle([item.e, ...distractors], rng);
  return {
    topic: "Pictures",
    prompt: `Tap the ${item.name.toLowerCase()}!`,
    choices,
    choiceEmoji: true,
    correctIndex: choices.indexOf(item.e),
  };
}

function makeCategory(rng) {
  const cat = pick(["animal", "food", "vehicle", "nature", "thing"], rng);
  const inCat = PICTURES.filter((p) => p.cat === cat);
  const outCat = PICTURES.filter((p) => p.cat !== cat);
  const correct = pick(inCat, rng);
  const distractors = shuffle([...outCat], rng).slice(0, 3).map((p) => p.e);
  const choices = shuffle([correct.e, ...distractors], rng);
  return {
    topic: "Pictures",
    prompt: `Which one is a ${CATEGORY_LABEL[cat]}?`,
    choices,
    choiceEmoji: true,
    correctIndex: choices.indexOf(correct.e),
  };
}

const PICTURE_MAKERS = [makeCount, makeNamePicture, makeTapPicture, makeCategory];

// Return a question for the given difficulty level. Heavily weighted toward
// visual picture questions (kids love them), with math and text mixed in.
export function getQuestion(level = 0, rng = Math.random) {
  const roll = rng();
  if (roll < 0.5) {
    // picture question
    const maker = pick(PICTURE_MAKERS, rng);
    return maker === makeCount ? maker(level, rng) : maker(rng);
  }
  if (roll < 0.8) return makeMath(level, rng);
  // text bank
  const eligible = BANK.filter((q) => (q.minLevel || 0) <= level);
  const p = pick(eligible.length ? eligible : BANK, rng);
  return { topic: p.topic, prompt: p.prompt, choices: [...p.choices], correctIndex: p.correctIndex };
}
