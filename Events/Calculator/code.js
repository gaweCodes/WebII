const display = document.getElementById("display");
const historyDisplay = document.getElementById("displayHistory");
function Init() {
  display.value = "0";
  const buttons = document.querySelectorAll("input[type=button]");
  buttons.forEach((b) => {
    b.addEventListener("mouseover", (e) => {
      document.getElementById(e.target.id).classList.toggle("buttonHover");
    });
    b.addEventListener("mouseout", (e) => {
      document.getElementById(e.target.id).classList.toggle("buttonHover");
    });
  });
}

function WriteValueToDisplay(e) {
  WriteToDisplay(e.value);
}

function back() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function addKeyValue(e) {
  WriteToDisplay(e.key);
}

function WriteToDisplay(value) {
  if (display.value !== "0") {
    display.value += value;
  } else {
    display.value = value;
  }
}
function addition() {
  if (display.value > 0) {
    historyDisplay.value = display.value + " + ";
    display.value = "";
  }
}
function Division() {
  if (display.value > 0) {
    historyDisplay.value = display.value + " / ";
    display.value = "";
  }
}
function Multiplication() {
  if (display.value > 0) {
    historyDisplay.value = display.value + " * ";
    display.value = "";
  }
}
function Subtraction() {
  if (display.value > 0) {
    historyDisplay.value = display.value + " - ";
    display.value = "";
  }
}

function calculate() {
  display.value = eval(historyDisplay.value + display.value);
}
