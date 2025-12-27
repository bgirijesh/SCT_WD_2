let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    lapCount = 1;
    display.textContent = "00:00:00";
    laps.innerHTML = "";
}

function lap() {
    if (isRunning) {
        const li = document.createElement("li");
        li.textContent = `Lap ${lapCount++}: ${display.textContent}`;
        laps.appendChild(li);
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let totalSeconds = Math.floor(elapsedTime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    display.textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}
