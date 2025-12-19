/**
 * script.js
 */
const screen = document.getElementById("screen");

// Convert to array for easy manipulation
const tokenBtns = [...document.getElementsByClassName("tokens")];

tokenBtns.forEach((tokenBtn) => {
  tokenBtn.addEventListener('click', () => {
    addToScreen(tokenBtn.value);
  });
});


// UTILITY FXN: Adds token to screen
function addToScreen(token) {
  screen.textContent += token;
}

function clearScreen() {
  screen.textContent = '';
}

function calculate() {
  alert("Calculating");
}