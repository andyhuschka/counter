let counter = 0;
let maxSteps = 100;
let counterElement = document.getElementById("counter");
let counterArea = document.getElementById("counterArea");
let resetButton = document.getElementById("resetButton");

function increaseCounter() {
  counter++;
  counterElement.textContent = counter;
  updateBackground();
}

function updateBackground() {
  let percentage = ((counter % maxSteps) / maxSteps) * 100;
  counterArea.style.background = `linear-gradient(to right, #f7e600 ${percentage}%, white ${percentage}%)`;

  if (counter % maxSteps === 0) {
    counterArea.style.background = "white";
  }
}

function resetCounter() {
  counter = 0;
  counterElement.textContent = counter;
  counterArea.style.background = "white";
}

document.body.addEventListener("click", function (event) {
  if (event.target !== resetButton) {
    increaseCounter();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    increaseCounter();
  }
});

resetButton.addEventListener("click", resetCounter);
