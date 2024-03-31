const display = document.getElementById("display");

function displayValue(value) {
  display.value += value;
}
function clear() {
  //TODO
}
function clearAll() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR!";
  }
}
