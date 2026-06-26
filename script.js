function clearDisplay() {
  document.querySelector('.equation').textContent = '';
  document.querySelector('.result').textContent = '';
}

function appendToDisplay(value) {
  if (value === '=') {
    try {
      const equation = document.querySelector('.equation').textContent;
      const result = eval(equation);
      if (!isFinite(result)) {
        document.querySelector(".result").textContent = "Error";
        return;
      }
      document.querySelector(".result").textContent = Number.isInteger(result) ? result : result.toFixed(2);
      document.querySelector(".equation").textContent = result;
    } catch (error) {
      document.querySelector('.result').textContent = 'Error';
    }
  } else {
    document.querySelector('.equation').textContent += value;
  }
}