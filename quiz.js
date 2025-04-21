// Load user info
const name = localStorage.getItem("name") || "there";
const gender = localStorage.getItem("gender") || "neutral";

// Display personalized welcome
document.getElementById("welcomeText").textContent = `Hey ${name}, let's explore your sexual temperament.`;

// Load appropriate question set
let questions = [];
if (gender === "female") {
  questions = window.questions_female || [];
} else if (gender === "male") {
  questions = window.questions_male || [];
} else {
  questions = window.questions_neutral || [];
}

// Initialize state
let currentIndex = 0;
let answers = new Array(questions.length).fill(null);

// DOM refs
const quizContainer = document.getElementById("quizContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressBar = document.getElementById("progressBar");

// Render question
function renderQuestion(index) {
  const q = questions[index];

  quizContainer.innerHTML = `
    <div class="question-block">
      <p class="question-counter">Question ${index + 1} of ${questions.length}</p>
      <h3 class="question-text">${q.text}</h3>
      <div class="options">
        ${[0, 1, 2, 3, 4].map(value => `
          <label class="option">
            <input 
              type="radio" 
              name="answer" 
              value="${value}" 
              ${answers[index] === value ? "checked" : ""}
            />
            ${value} – ${getLabel(value)}
          </label>
        `).join('')}
      </div>
    </div>
  `;

  // Button states
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === questions.length - 1 ? "Finish" : "Next";

  // Progress bar update
  const progressPercent = ((index + 1) / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function getLabel(val) {
    switch (val) {
      case 0: return "😐 Not at all like me";
      case 1: return "🙂 Not much like me";
      case 2: return "😌 Somewhat like me";
      case 3: return "😍 A lot like me";
      case 4: return "🔥 Exactly like me";
      default: return "";
    }
  }
  

// Handle answer select
quizContainer.addEventListener("change", (e) => {
  if (e.target.name === "answer") {
    answers[currentIndex] = parseInt(e.target.value);
  }
});

// Handle nav
nextBtn.addEventListener("click", () => {
  if (answers[currentIndex] === null) {
    alert("Please select an answer before continuing.");
    return;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
  } else {
    // Save results
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    localStorage.setItem("questionTypes", JSON.stringify(questions.map(q => q.type)));
    window.location.href = "result.html";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion(currentIndex);
  }
});

// Init
renderQuestion(currentIndex);
