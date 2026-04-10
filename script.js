let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("guess");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

function checkGuess() {
  const guess = Number(input.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "دخل رقم بين 1 و 100";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess < secretNumber) {
    message.textContent = "📉 Too low!";
    message.style.color = "orange";
  } 
  else if (guess > secretNumber) {
    message.textContent = "📈 Too high!";
    message.style.color = "red";
  } 
  else {
    message.textContent = "🎉 Correct! You win!";
    message.style.color = "green";

    input.disabled = true;
  }

  input.value = "";
}


function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  attemptsDisplay.textContent = 0;
  message.textContent = "";
  input.value = "";
  input.disabled = false;
}