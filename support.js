function fecharPagina() {
    window.close();
}
// Function to get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get time from URL (in seconds)
let timeLeft = parseInt(getQueryParam("time"));

const alarmSound = document.getElementById("alarmSound"); // Get the audio element
const timerElement = document.getElementById("timer");

// Countdown function
function startTimer() {
    if (timeLeft > 0) {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
        setTimeout(startTimer, 1000);
    } else {
        timerElement.textContent = "Time's up!";
        alarmSound.play(); // Play alarm sound
        alert("Your eggs are ready!"); // Show alert
    }
}

// Start the timer when the page loads
window.onload = startTimer;
