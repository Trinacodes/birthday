<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>How Well Do You Know the Birthday Celebrant?</title>
  <link rel="stylesheet" href="style.css">
  body {
  background: linear-gradient(to right, lavender, pink, skyblue);
  font-family: 'Cursive', sans-serif;
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 0;
}

#quiz-container {
  background: rgba(255, 255, 255, 0.15);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 25px #fff;
  max-width: 600px;
  margin: 50px auto;
}

button {
  background: #b57edc;
  border: none;
  padding: 12px 25px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  margin: 5px;
}

button:hover {
  background: #ff69b4;
  transform: scale(1.05);
}

#result {
  font-size: 1.2em;
  margin-top: 20px;
  color: #fff;
}
</head>
<body>
  <div id="quiz-container">
    <h1>✨ How Well Do You Know the Birthday Celebrant? ✨</h1>
    <div id="question"></div>
    <div id="options"></div>
    <button id="next-btn">Next</button>
    <div id="result"></div>
  </div>
  <script src="script.js">
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

  </script>
  
</body>
</html>
