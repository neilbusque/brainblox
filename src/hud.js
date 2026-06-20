// Manages the 2D overlay: star count, transient flash messages, the win screen,
// the room badge + player list (for multiplayer), and the play-again button.
// Pure DOM - no game or 3D knowledge.

export function createHud() {
  const starCount = document.getElementById("star-count");
  const flash = document.getElementById("flash");
  const winScreen = document.getElementById("win");
  const winStarCount = document.getElementById("win-star-count");
  const roomBadge = document.getElementById("room-badge");
  const roomCodeLabel = document.getElementById("room-code-label");
  const playerList = document.getElementById("player-list");

  let stars = 0;
  let flashTimer = null;

  function setStars(n) {
    stars = n;
    starCount.textContent = String(n);
  }
  function addStar() {
    setStars(stars + 1);
  }

  function showFlash(msg, ms = 1200) {
    flash.textContent = msg;
    flash.classList.add("show");
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => flash.classList.remove("show"), ms);
  }

  function showWin() {
    winStarCount.textContent = String(stars);
    winScreen.classList.remove("hidden");
  }
  function hideWin() {
    winScreen.classList.add("hidden");
  }

  function showRoom(code) {
    roomCodeLabel.textContent = code;
    roomBadge.classList.remove("hidden");
  }

  // players: array of { id, name, color, speaking }
  function setPlayers(players) {
    playerList.innerHTML = "";
    for (const p of players) {
      const chip = document.createElement("div");
      chip.className = "player-chip" + (p.speaking ? " speaking" : "");
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.style.background = "#" + p.color.toString(16).padStart(6, "0");
      chip.appendChild(dot);
      chip.appendChild(document.createTextNode(p.name));
      playerList.appendChild(chip);
    }
  }

  return { setStars, addStar, showFlash, showWin, hideWin, showRoom, setPlayers, getStars: () => stars };
}
