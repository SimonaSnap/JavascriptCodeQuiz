//creating the button to start the quiz
var body = document.body;
var pressButton = document.createElement("button");
body.appendChild(pressButton)
pressButton.textContent = "Start Timer";

//creating a timer and linking it to the start button
var launch = document.querySelector("#start");
var statement = document.querySelector(".time");

var timeLeft = 60;

function setTimer()
{
    var timerInterval = setInterval(function ()
    {
        timeLeft--;
        statement.textContent = timeLeft + " seconds remaining";

        if (timeLeft === 0)
        {
            clearInterval(timerInterval);
            goToHighscore();
        }
    }, 1000);
}

pressButton.addEventListener("click", setTimer);