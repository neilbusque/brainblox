import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock localStorage
const store = {};
const localStorageMock = {
  getItem: vi.fn((key) => store[key] || null),
  setItem: vi.fn((key, val) => { store[key] = val; }),
  removeItem: vi.fn((key) => { delete store[key]; }),
};
vi.stubGlobal("localStorage", localStorageMock);

// Mock audio context so sfx.achievement() doesn't blow up
vi.stubGlobal("AudioContext", undefined);
vi.stubGlobal("webkitAudioContext", undefined);

beforeEach(() => {
  for (const k of Object.keys(store)) delete store[k];
  vi.clearAllMocks();
});

// Re-import fresh each test by dynamic import with cache bust
async function freshModule() {
  // vitest caches modules, so we test using the same import but reset state via localStorage
  const mod = await import("../src/achievements.js");
  return mod;
}

describe("achievements", () => {
  it("exports the expected API", async () => {
    const mod = await freshModule();
    expect(typeof mod.getAchievements).toBe("function");
    expect(typeof mod.getUnlocked).toBe("function");
    expect(typeof mod.onEvent).toBe("function");
    expect(typeof mod.progress).toBe("function");
    expect(typeof mod.categories).toBe("function");
    expect(typeof mod.isUnlocked).toBe("function");
  });

  it("has a non-empty achievement registry", async () => {
    const mod = await freshModule();
    const all = mod.getAchievements();
    expect(all.length).toBeGreaterThan(10);
    for (const a of all) {
      expect(a.id).toBeTruthy();
      expect(a.title).toBeTruthy();
      expect(a.emoji).toBeTruthy();
      expect(a.category).toBeTruthy();
    }
  });

  it("returns categories in display order", async () => {
    const mod = await freshModule();
    const cats = mod.categories();
    expect(cats.length).toBeGreaterThanOrEqual(4);
    expect(cats[0]).toBe("Getting Started");
  });

  it("progress returns correct counts", async () => {
    const mod = await freshModule();
    const p = mod.progress();
    expect(p.total).toBeGreaterThan(10);
    expect(p.unlocked).toBeGreaterThanOrEqual(0);
  });

  it("every achievement has unique id", async () => {
    const mod = await freshModule();
    const ids = mod.getAchievements().map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every achievement has either event or stat trigger", async () => {
    const mod = await freshModule();
    for (const a of mod.getAchievements()) {
      expect(a.event || a.stat).toBeTruthy();
    }
  });
});
