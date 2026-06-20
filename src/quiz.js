// Owns the quiz modal DOM. `ask(question)` shows the question and resolves with
// true (correct) or false (wrong) after the kid taps an answer. Knows nothing
// about the 3D world - the game loop pauses input while a question is open.

export function createQuiz() {
  const root = document.getElementById("quiz");
  const topicEl = document.getElementById("quiz-topic");
  const promptEl = document.getElementById("quiz-prompt");
  const choicesEl = document.getElementById("quiz-choices");
  const feedbackEl = document.getElementById("quiz-feedback");

  function ask(question) {
    return new Promise((resolve) => {
      topicEl.textContent = question.topic;
      promptEl.textContent = question.prompt;
      feedbackEl.textContent = "";
      feedbackEl.className = "quiz-feedback";
      choicesEl.innerHTML = "";

      question.choices.forEach((choice, i) => {
        const btn = document.createElement("button");
        btn.className = "choice";
        btn.textContent = choice;
        btn.addEventListener("click", () => pick(i, btn));
        choicesEl.appendChild(btn);
      });

      root.classList.remove("hidden");

      // Dev-only test hook (Vite strips this branch from production builds, so
      // there is no answer leak for real players).
      if (import.meta.env.DEV) window.__bbQuiz = { choices: question.choices, correctIndex: question.correctIndex };

      function pick(i, btn) {
        const buttons = [...choicesEl.querySelectorAll(".choice")];
        buttons.forEach((b) => (b.disabled = true));
        const correct = i === question.correctIndex;
        if (correct) {
          btn.classList.add("correct");
          feedbackEl.textContent = "Yes! Great job!";
          feedbackEl.className = "quiz-feedback good";
          setTimeout(() => finish(true), 750);
        } else {
          btn.classList.add("wrong");
          buttons[question.correctIndex].classList.add("correct");
          feedbackEl.textContent = "Oops! Try again.";
          feedbackEl.className = "quiz-feedback bad";
          setTimeout(() => finish(false), 1300);
        }
      }

      function finish(result) {
        root.classList.add("hidden");
        resolve(result);
      }
    });
  }

  return { ask, isOpen: () => !root.classList.contains("hidden") };
}
