const id = document.getElementById("id");
const advice = document.getElementById("advice");
const diceBtn = document.getElementById("diceBtn");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    // console.log(response);
    const data = await response.json();
    console.log(data);
    id.textContent = `ADVICE #${data.slip.id}`;
    advice.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    advice.textContent = "Something went wrong. Please try again later.";
  }
}
getAdvice();
diceBtn.addEventListener("click", getAdvice);
