const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceBtn = document.getElementById('dice-btn');

async function getAdvice() {
  adviceText.style.opacity = 0.5;
  try {
    const response = await fetch('https://api.adviceslip.com/advice?timestamp=' + new Date().getTime());
    const data = await response.json();
    const { id, advice } = data.slip;

    adviceId.textContent = id;
    adviceText.textContent = `"${advice}"`;
    adviceText.style.opacity = 1;
  } catch (error) {
    adviceText.textContent = "⚠️ Unable to fetch advice. Try again!";
  }
}

diceBtn.addEventListener('click', getAdvice);
