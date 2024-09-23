let startTime;
let updatedTime;
let difference;
let interval;
let running = false;

function updateTime() {
    if (!running) return;
    updatedTime = new Date();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('milliseconds').textContent = String(milliseconds).padStart(2, '0');
}

function startButton() {
    if (!running) {
        startTime = new Date();
        interval = setInterval(() => {
            updateTime();
        }, 10);
        running = true;
    }
}

function stopButton() {
    clearInterval(interval);
    running = false;
}

function resetButton() {
    clearInterval(interval);
    running = false;
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '00';
}

document.getElementById('startButton').addEventListener('click', startButton);
document.getElementById('stopButton').addEventListener('click', stopButton);
document.getElementById('resetButton').addEventListener('click', resetButton);