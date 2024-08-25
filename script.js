// Timer Widget Functionality
let timerInterval;
let timerTime = 0;

document.getElementById("start-timer").addEventListener("click", function () {
  let inputMinutes = parseInt(
    document.getElementById("target-time-input").value
  );
  if (isNaN(inputMinutes)) return;

  timerTime = inputMinutes * 60;
  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    if (timerTime > 0) {
      timerTime--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);

  togglePlayPause("timer", true);
});

document.getElementById("pause-timer").addEventListener("click", function () {
  clearInterval(timerInterval);
  togglePlayPause("timer", false);
});

document
  .getElementById("plus-15sec-timer")
  .addEventListener("click", function () {
    timerTime += 15;
    updateTimerDisplay();
  });

document
  .getElementById("minus-15sec-timer")
  .addEventListener("click", function () {
    timerTime = Math.max(0, timerTime - 15);
    updateTimerDisplay();
  });

function updateTimerDisplay() {
  const minutes = Math.floor(timerTime / 60);
  const seconds = timerTime % 60;
  document.getElementById("timer-display-minutes").textContent = String(
    minutes
  ).padStart(2, "0");
  document.getElementById("timer-display-seconds").textContent = String(
    seconds
  ).padStart(2, "0");
}

// Stopwatch Widget Functionality
let stopwatchInterval;
let stopwatchTime = 0;

document
  .getElementById("start-stopwatch")
  .addEventListener("click", function () {
    clearInterval(stopwatchInterval);

    stopwatchInterval = setInterval(function () {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);

    togglePlayPause("stopwatch", true);
  });

document
  .getElementById("pause-stopwatch")
  .addEventListener("click", function () {
    clearInterval(stopwatchInterval);
    togglePlayPause("stopwatch", false);
  });

document
  .getElementById("plus-15sec-stopwatch")
  .addEventListener("click", function () {
    stopwatchTime += 15;
    updateStopwatchDisplay();
  });

document
  .getElementById("minus-15sec-stopwatch")
  .addEventListener("click", function () {
    stopwatchTime = Math.max(0, stopwatchTime - 15);
    updateStopwatchDisplay();
  });

function updateStopwatchDisplay() {
  const minutes = Math.floor(stopwatchTime / 60);
  const seconds = stopwatchTime % 60;
  document.getElementById("stopwatch-display-minutes").textContent = String(
    minutes
  ).padStart(2, "0");
  document.getElementById("stopwatch-display-seconds").textContent = String(
    seconds
  ).padStart(2, "0");
}

// Utility Functions
function togglePlayPause(widget, isPlaying) {
  document.getElementById(`start-${widget}`).style.display = isPlaying
    ? "none"
    : "inline-block";
  document.getElementById(`pause-${widget}`).style.display = isPlaying
    ? "inline-block"
    : "none";
}
