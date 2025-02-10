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
let theReal = getQueryParam("name");
let url = window.location.href;

const alarmSound = document.getElementById("alarmSound"); // Get the audio element
const timerElement = document.getElementById("timer");
const nameObject = document.getElementById("name");

function changeName(){
    if(theReal == "rice"){
        nameObject.textContent = "Your rice is ready in...";
    }
    else if(theReal == "feijao"){
        nameObject.textContent = "Your baked bean is ready in...";
    }
    else{
        nameObject.textContent = "Your cuzcuz is ready in...";
    }
}
// Countdown function
function startTimer() {
    if(url.includes("others")){
        changeName();
    }
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