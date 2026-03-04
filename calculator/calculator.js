let expression = "";

function updateDisplay() {
  document.getElementById("expression").textContent = expression
    .replace(/\*/g, "×")
    .replace(/\//g, "÷");
}

function appendToDisplay(value) {
  // Prevent multiple decimals in the same number
  if (value === ".") {
    const parts = expression.split(/[\+\-\*\/]/);
    if (parts[parts.length - 1].includes(".")) return;
  }
  expression += value;
  updateDisplay();
}

function clearAll() {
  expression = "";
  document.getElementById("result").textContent = "0";
  document.getElementById("expression").textContent = "";
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
  if (!expression) document.getElementById("result").textContent = "0";
}

function calculate() {
  if (!expression) return;
  try {
    // Replace % with /100* for percentage support
    const sanitized = expression.replace(/(\d+)%/g, "($1/100)");
    const result = Function('"use strict"; return (' + sanitized + ")")();
    document.getElementById("expression").textContent =
      expression.replace(/\*/g, "×").replace(/\//g, "÷") + " =";
    const rounded = parseFloat(result.toFixed(10));
    document.getElementById("result").textContent = rounded;
    expression = String(rounded);
  } catch (e) {
    document.getElementById("result").textContent = "Error";
    expression = "";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") appendToDisplay(e.key);
  else if (["+", "-", "*", "/"].includes(e.key)) appendToDisplay(e.key);
  else if (e.key === ".") appendToDisplay(".");
  else if (e.key === "%") appendToDisplay("%");
  else if (e.key === "Enter" || e.key === "=") calculate();
  else if (e.key === "Backspace") deleteLast();
  else if (e.key === "Escape") clearAll();
});
