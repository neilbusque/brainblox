// The start screen. Collects the player's name, the activity (Obstacle Course or
// Quiz Arcade), and whether to play alone / create a room / join by code.
// Resolves once with { activity, mode, name, code }.
// Reads ?room=CODE from the URL so an invite link drops you straight onto Join.

import { MULTIPLAYER_AVAILABLE } from "./net.js";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no confusing 0/O/1/I/L

function randomCode(len = 5) {
  let s = "";
  const arr = new Uint32Array(len);
  crypto.getRandomValues(arr);
  for (let i = 0; i < len; i++) s += ALPHABET[arr[i] % ALPHABET.length];
  return s;
}

export function showLobby() {
  return new Promise((resolve) => {
    const lobby = document.getElementById("lobby");
    const nameInput = document.getElementById("name-input");
    const codeInput = document.getElementById("code-input");
    const joinRow = document.getElementById("join-row");
    const btnSolo = document.getElementById("btn-solo");
    const btnCreate = document.getElementById("btn-create");
    const btnJoin = document.getElementById("btn-join");
    const modeObby = document.getElementById("mode-obby");
    const modeArcade = document.getElementById("mode-arcade");
    const msg = document.getElementById("lobby-msg");

    nameInput.value = localStorage.getItem("bb_name") || "";

    const url = new URL(location.href);
    const preCode = (url.searchParams.get("room") || "").toUpperCase();
    if (preCode) codeInput.value = preCode;

    let activity = "obby";

    // the arcade is single-player; the obby supports rooms
    function applyActivity() {
      modeObby.classList.toggle("selected", activity === "obby");
      modeArcade.classList.toggle("selected", activity === "arcade");
      const multi = activity === "obby";
      btnCreate.classList.toggle("hidden", !multi);
      joinRow.classList.toggle("hidden", !multi);
      btnSolo.textContent = activity === "arcade" ? "⚡ Start" : "🎮 Play Alone";
    }
    modeObby.addEventListener("click", () => { activity = "obby"; applyActivity(); });
    modeArcade.addEventListener("click", () => { activity = "arcade"; applyActivity(); });
    applyActivity();

    if (!MULTIPLAYER_AVAILABLE) msg.textContent = "Playing alone is ready. Rooms need a quick grown-up setup.";

    function name() {
      const n = nameInput.value.trim().slice(0, 12);
      const final = n || "Player";
      localStorage.setItem("bb_name", final);
      return final;
    }

    function done(choice) {
      lobby.classList.add("hidden");
      resolve(choice);
    }

    btnSolo.addEventListener("click", () => done({ activity, mode: "solo", name: name() }));

    btnCreate.addEventListener("click", () => {
      if (!MULTIPLAYER_AVAILABLE) {
        msg.textContent = "Rooms are not set up yet - try Play Alone!";
        return;
      }
      done({ activity: "obby", mode: "multi", name: name(), code: randomCode() });
    });

    btnJoin.addEventListener("click", () => {
      const code = codeInput.value.trim().toUpperCase();
      if (!code) {
        msg.textContent = "Type a room code first!";
        return;
      }
      if (!MULTIPLAYER_AVAILABLE) {
        msg.textContent = "Rooms are not set up yet - try Play Alone!";
        return;
      }
      done({ activity: "obby", mode: "multi", name: name(), code });
    });
  });
}
