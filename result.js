const answers = JSON.parse(localStorage.getItem("quizAnswers"));
const questionTypes = JSON.parse(localStorage.getItem("questionTypes"));
const name = localStorage.getItem("name") || "Friend";
const gender = localStorage.getItem("gender") || "neutral";

// Compute scores
let SIS = 0;
let SES = 0;

answers.forEach((ans, i) => {
  if (questionTypes[i] === "SIS") SIS += ans;
  if (questionTypes[i] === "SES") SES += ans;
});

// Score mapping functions
function getSISLevel(score) {
  if (score <= 6) return "lsis";
  if (score <= 13) return "msis";
  return "hsis";
}

function getSESLevel(score) {
  if (score <= 7) return "lSES";
  if (score <= 15) return "mSES";
  return "hSES";
}

// Calculate levels
const sisLevel = getSISLevel(SIS);
const sesLevel = getSESLevel(SES);

// Route to detailed result page
const resultPage = `result-${gender}-${sisLevel}-${sesLevel}.html`;
window.location.href = resultPage;
