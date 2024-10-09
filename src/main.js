const displayTimer = document.getElementById("displayTimer");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// This is a function to start the Timer
const startTimer = () => {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date() - elapsedTime;
    timer = setInterval(timerUpdate, 10); // Use setInterval to call timerUpdate every 10 ms
  }
};
// This is a function to stop the timer
const stopTimer = () => {
  if (isRunning) {
    isRunning = false;
    elapsedTime = new Date() - startTime;
    clearInterval(timer);
  }
};

// This is a function to reset the timer
const resetTimer = () => {
  isRunning = false;
  elapsedTime = 0;
  startTime = 0;
  clearInterval(timer);
  displayTimer.textContent = "00 : 00 : 00 : 00";
};

// This is a function to update the timer display
const timerUpdate = () => {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliSeconds = Math.floor((elapsedTime % 1000) / 10); 

  // Padding each value to two digits
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliSeconds = String(milliSeconds).padStart(2, "0");
  // Update the display
  displayTimer.innerText =`${hours} : ${minutes} : ${seconds} : ${milliSeconds}`;
};
