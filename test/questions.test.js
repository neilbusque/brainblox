import { describe, it, expect } from "vitest";
import { BANK, getQuestion } from "../src/questions.js";

// A small seedable PRNG so tests are deterministic across runs.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

describe("question bank", () => {
  it("every bank item has a valid single correct answer", () => {
    for (const q of BANK) {
      expect(q.choices.length).toBeGreaterThanOrEqual(3);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.choices.length);
      expect(typeof q.choices[q.correctIndex]).toBe("string");
      // no duplicate choices (would make a second "correct" answer)
      expect(new Set(q.choices).size).toBe(q.choices.length);
    }
  });
});

describe("getQuestion", () => {
  it("returns a well-formed question for many seeds and levels", () => {
    for (let level = 0; level <= 6; level++) {
      for (let seed = 1; seed <= 200; seed++) {
        const q = getQuestion(level, mulberry32(seed * (level + 1)));
        expect(q.choices.length).toBeGreaterThanOrEqual(3);
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.choices.length);
        expect(new Set(q.choices).size).toBe(q.choices.length); // distinct choices
      }
    }
  });

  it("generated math answers are arithmetically correct", () => {
    let mathSeen = 0;
    for (let seed = 1; seed <= 1000 && mathSeen < 300; seed++) {
      const q = getQuestion(5, mulberry32(seed));
      if (q.topic !== "Math") continue;
      mathSeen++;
      const m = q.prompt.match(/^(\d+)\s*([+−×])\s*(\d+)\s*=/);
      expect(m).toBeTruthy();
      const a = Number(m[1]);
      const b = Number(m[3]);
      let expected;
      if (m[2] === "+") expected = a + b;
      else if (m[2] === "−") expected = a - b; // minus sign
      else expected = a * b; // times sign
      expect(Number(q.choices[q.correctIndex])).toBe(expected);
      expect(expected).toBeGreaterThanOrEqual(0); // never negative for kids
    }
    expect(mathSeen).toBeGreaterThan(0);
  });
});
