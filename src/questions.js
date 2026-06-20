// ============================================================
//  BrainBlox question content
//  ----------------------------------------------------------
//  HOW TO ADD YOUR OWN QUESTIONS:
//  Add an object to the BANK array below. Each one needs:
//    topic        - "Reading", "Science", or "Geography"
//    prompt       - the question text (keep it short + simple)
//    choices      - 3 or 4 answer options (strings)
//    correctIndex - which choice is right (0 = first)
//    minLevel     - 0 for easy, higher = shows up later (optional)
//  Math questions are made automatically below - no editing needed.
// ============================================================

export const BANK = [
  // ---- Reading / Spelling ----
  { topic: "Reading", prompt: "Which word means a baby dog?", choices: ["Puppy", "Kitten", "Calf", "Chick"], correctIndex: 0, minLevel: 0 },
  { topic: "Reading", prompt: "Which word is spelled correctly?", choices: ["Frend", "Friend", "Freind", "Frynd"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "What is the opposite of 'hot'?", choices: ["Warm", "Cold", "Fast", "Big"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "Which word rhymes with 'cat'?", choices: ["Dog", "Hat", "Cup", "Sun"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "Which word is a color?", choices: ["Jump", "Purple", "Loud", "Seven"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "Which one is a 'noun' (a thing)?", choices: ["Run", "Happy", "Table", "Quickly"], correctIndex: 2, minLevel: 1 },
  { topic: "Reading", prompt: "Which word is spelled correctly?", choices: ["Becuase", "Because", "Becuse", "Becouse"], correctIndex: 1, minLevel: 1 },
  { topic: "Reading", prompt: "What is the opposite of 'happy'?", choices: ["Sad", "Glad", "Funny", "Tall"], correctIndex: 0, minLevel: 0 },
  { topic: "Reading", prompt: "Which word means 'very big'?", choices: ["Tiny", "Huge", "Soft", "Slow"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "Which word rhymes with 'play'?", choices: ["Day", "Dog", "Run", "Cup"], correctIndex: 0, minLevel: 0 },
  { topic: "Reading", prompt: "Which is a complete sentence?", choices: ["The big dog", "I like pizza.", "Running fast", "Under the"], correctIndex: 1, minLevel: 1 },
  { topic: "Reading", prompt: "Which word is plural (more than one)?", choices: ["Cat", "Dogs", "House", "Tree"], correctIndex: 1, minLevel: 1 },
  { topic: "Reading", prompt: "What sound does 'sh' make in 'ship'?", choices: ["sss", "shh", "ch", "th"], correctIndex: 1, minLevel: 0 },
  { topic: "Reading", prompt: "Which word means to 'look at'?", choices: ["See", "Eat", "Sleep", "Walk"], correctIndex: 0, minLevel: 0 },
  { topic: "Reading", prompt: "Which word is spelled correctly?", choices: ["Beutiful", "Beautiful", "Butiful", "Beatiful"], correctIndex: 1, minLevel: 2 },

  // ---- Science / Animals / Body ----
  { topic: "Science", prompt: "Which animal lays eggs?", choices: ["Dog", "Chicken", "Cat", "Horse"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "What do plants need to grow?", choices: ["Candy", "Sunlight", "Toys", "Rocks"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "How many legs does a spider have?", choices: ["6", "8", "4", "10"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "Which one is a planet?", choices: ["Mars", "Moon", "Sun", "Cloud"], correctIndex: 0, minLevel: 0 },
  { topic: "Science", prompt: "What do bees make?", choices: ["Milk", "Honey", "Bread", "Silk"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "Which animal lives in the ocean?", choices: ["Lion", "Dolphin", "Cow", "Bear"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "What part of your body helps you see?", choices: ["Ears", "Eyes", "Nose", "Toes"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "Water turns into ice when it gets very...", choices: ["Hot", "Cold", "Loud", "Fast"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "Which is the biggest?", choices: ["Ant", "Elephant", "Mouse", "Cat"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "A caterpillar turns into a...", choices: ["Spider", "Butterfly", "Bird", "Fish"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "Which one gives us light in the daytime?", choices: ["Moon", "Sun", "Stars", "Lamp"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "How many days are in one week?", choices: ["5", "7", "10", "12"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "Which animal can fly?", choices: ["Shark", "Eagle", "Frog", "Snake"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "What do we breathe to stay alive?", choices: ["Water", "Air", "Sand", "Juice"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "Which season is the coldest?", choices: ["Summer", "Winter", "Spring", "Fall"], correctIndex: 1, minLevel: 0 },
  { topic: "Science", prompt: "What is the center of our solar system?", choices: ["Earth", "The Sun", "The Moon", "Jupiter"], correctIndex: 1, minLevel: 1 },
  { topic: "Science", prompt: "Which animal is a mammal?", choices: ["Snake", "Whale", "Frog", "Lizard"], correctIndex: 1, minLevel: 2 },
  { topic: "Science", prompt: "What do we call frozen rain?", choices: ["Snow", "Fog", "Wind", "Dew"], correctIndex: 0, minLevel: 1 },

  // ---- Geography ----
  { topic: "Geography", prompt: "What is the capital of France?", choices: ["Paris", "Rome", "London", "Madrid"], correctIndex: 0, minLevel: 1 },
  { topic: "Geography", prompt: "Which one is an ocean?", choices: ["Pacific", "Amazon", "Sahara", "Everest"], correctIndex: 0, minLevel: 1 },
  { topic: "Geography", prompt: "Which is the biggest? An ocean or a lake?", choices: ["Ocean", "Lake", "Same", "Pond"], correctIndex: 0, minLevel: 0 },
  { topic: "Geography", prompt: "How many continents are there?", choices: ["5", "7", "10", "3"], correctIndex: 1, minLevel: 1 },
  { topic: "Geography", prompt: "Which is a very hot, dry place?", choices: ["Desert", "Forest", "River", "Beach"], correctIndex: 0, minLevel: 0 },
  { topic: "Geography", prompt: "What do we call a very tall hill?", choices: ["Valley", "Mountain", "Field", "Cave"], correctIndex: 1, minLevel: 0 },
  { topic: "Geography", prompt: "Which country has the Eiffel Tower?", choices: ["France", "Japan", "Brazil", "Egypt"], correctIndex: 0, minLevel: 2 },
  { topic: "Geography", prompt: "Which place is covered in ice and snow?", choices: ["Antarctica", "Africa", "India", "Mexico"], correctIndex: 0, minLevel: 2 },
  { topic: "Geography", prompt: "What is the capital of the United States?", choices: ["New York", "Washington, D.C.", "Texas", "Miami"], correctIndex: 1, minLevel: 2 },
  { topic: "Geography", prompt: "Which is a country?", choices: ["Japan", "Paris", "Nile", "Mars"], correctIndex: 0, minLevel: 1 },
];

// Build a multiple-choice math question scaled to the difficulty level.
// level 0-1: add/sub within 10-20.  2-3: within 20-50.  4+: easy times tables.
function makeMath(level, rng) {
  const r = (n) => Math.floor(rng() * n); // 0..n-1
  let a, b, op, answer;

  if (level >= 4 && rng() < 0.6) {
    // times tables
    a = 2 + r(8); // 2..9
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
      // keep subtraction positive
      if (b > a) [a, b] = [b, a];
      op = "−";
      answer = a - b;
    }
  }

  const prompt = `${a} ${op} ${b} = ?`;
  const choices = buildNumberChoices(answer, rng);
  return { topic: "Math", prompt, choices: choices.map(String), correctIndex: choices.indexOf(answer) };
}

// Make 4 distinct number choices including the answer, with plausible distractors.
function buildNumberChoices(answer, rng) {
  const set = new Set([answer]);
  let guard = 0;
  while (set.size < 4 && guard++ < 50) {
    const delta = (1 + Math.floor(rng() * 5)) * (rng() < 0.5 ? -1 : 1);
    const cand = answer + delta;
    if (cand >= 0) set.add(cand);
  }
  // pad if we somehow could not find enough (very small answers)
  let pad = answer + 10;
  while (set.size < 4) set.add(pad++);
  const arr = [...set];
  // shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Return a question for the given difficulty level.
// About half are math (auto-generated), half from the curated bank.
// `rng` defaults to Math.random but can be injected for tests.
export function getQuestion(level = 0, rng = Math.random) {
  const wantMath = rng() < 0.5;
  if (wantMath) return makeMath(level, rng);

  const eligible = BANK.filter((q) => (q.minLevel || 0) <= level);
  const pool = eligible.length ? eligible : BANK;
  const pick = pool[Math.floor(rng() * pool.length)];
  // return a shallow copy so callers can't mutate the bank
  return { topic: pick.topic, prompt: pick.prompt, choices: [...pick.choices], correctIndex: pick.correctIndex };
}
