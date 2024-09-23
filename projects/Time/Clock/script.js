function updateClock() {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

}
updateClock();
let x = setInterval(updateClock, 1000);

function startButton() {
    updateClock();
    x = setInterval(updateClock, 1000);
}
function stopButton() {
    clearInterval(x)
}

document.getElementById('startButton').addEventListener('click', startButton)
document.getElementById('stopButton').addEventListener('click', stopButton)
