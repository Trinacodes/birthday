const questions = [
  {
    question: "Which Taylor Swift era best matches the birthday celebrant?",
    options: ["Fearless", "Red", "1989", "Folklore"],
    answer: "1989"
  },
  {
    question: "What’s their favorite birthday treat?",
    options: ["Cupcakes", "Ice Cream", "Pizza", "Chocolate Cake"],
    answer: "Chocolate Cake"
  },
  {
    question: "If the birthday celebrant were a Taylor lyric, which fits best?",
    options: [
      "You belong with me",
      "Wildest dreams",
      "Shake it off",
      "Enchanted"
    ],
    answer: "Enchanted"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  document.getElementById("question").innerText = questions[currentQuestion].question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  questions[currentQuestion].options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
    triggerConfetti();
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("result").innerText = `You scored ${score}/${questions.length}! 🎉`;
  }
}

document.getElementById("next-btn").onclick = showQuestion;
showQuestion();

// Simple confetti effect
function triggerConfetti() {
  const confetti = document.createElement("div");
  confetti.innerText = "✨";
  confetti.style.position = "fixed";
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.top = "-20px";
  confetti.style.fontSize = "24px";
  confetti.style.animation = "fall 2s linear";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 2000);
}
