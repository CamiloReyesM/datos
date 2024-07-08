let currentFrequency = 80.0;
let currentBand = 'FM';

function updateDisplay() {
  document.getElementById('frequency').innerText = currentFrequency.toFixed(1);
  document.getElementById('band').innerText = currentBand;
}

function changeBand(band) {
  currentBand = band;
  updateDisplay();
}

function increaseFrequency() {
  if (currentFrequency < 99.9) {
    currentFrequency += 0.1;
    updateDisplay();
  }
}

function decreaseFrequency() {
  if (currentFrequency > 80.0) {
    currentFrequency -= 0.1;
    updateDisplay();
  }
}

window.onload = updateDisplay;
