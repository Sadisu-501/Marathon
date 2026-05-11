const id = document.getElementById("id");
const jokes = document.getElementById("jokes");
const diceBtn = document.getElementById("diceBtn");

async function getJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    // console.log(response);
    const data = await response.json();
    console.log(data);

    id.textContent = `JOKE #${data.id || "Random"}`;
    jokes.textContent = `"${data.joke}"`;
    // Handle single or two-part jokes
    if (data.type === "single") {
      jokes.textContent = `"${data.joke}"`;
    } else {
      jokes.textContent = `"${data.setup} - ${data.delivery}"`;
    }
  } catch (error) {
    jokes.textContent = "Something went wrong. Please try again later.";
  }
}
getJoke();
diceBtn.addEventListener("click", getJoke);
