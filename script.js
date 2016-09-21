var counting = false;
var minSec;
var start = document.querySelector(".start");
var pause = document.querySelector(".pause");
var time = document.querySelector(".time");

start.style.display = "none";

// Hide start button, show pause button
function toggleBtn() {
    start.style.display = "none";
    pause.style.display = "";
}

//Timer
function startTimer() {
    counting = true;
    window.interval = setInterval(function() {
        var timer = time.innerHTML.split(":");
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        seconds -= 1;

        if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 10 && length.seconds != 2) {
            seconds = "0" + seconds;
        }

        minSec = minutes + ":" + seconds;
        time.innerHTML = minSec;

        //When the time reaches 0
        if (minutes == 0 && seconds == 0) {
            clearInterval(interval);
            //For the audio
            var audio = new Audio("https://notificationsounds.com/soundfiles/ff4d5fbbafdf976cfdc032e3bde78de5/file-sounds-948-just-like-magic.mp3")
            audio.play();
        }
    }, 1000);
}
//25 min button
document.querySelector(".pomodoro").onclick = function() {
    if (counting) {
        clearInterval(interval);
        toggleBtn();
    }
    document.querySelector("body").style.background = "#26A65B";
    time.innerHTML = "25:00";
    startTimer();
};

//5 min button
document.querySelector(".break").onclick = function() {
    if (counting) {
        clearInterval(interval);
        toggleBtn();
    }
    document.querySelector("body").style.background = "#EF4836";
    time.innerHTML = "5:00";
    startTimer();
};

//Pause button
pause.onclick = function() {
    if (counting) {
        clearInterval(interval);
        time.innerHTML = minSec;
        pause.style.display = "none";
        start.style.display = "";
    }
};

//Start button, only there if pause is clicked
start.onclick = function() {
    startTimer();
    toggleBtn();
};
