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

//creating the first question
var question1 = document.createElement("h2");
var question1choices = document.createElement("ul")

var choice1 = document.createElement("li");
var choice2 = document.createElement("li");
var choice3 = document.createElement("li");
var choice4 = document.createElement("li");

question1.textContent = "Commonly used Javascript datatypes do NOT include?"
body.appendChild(question1);
body.appendChild(question1choices);

choice1.textContent = "Objects";
question1choices.appendChild(choice1);
choice2.textContent = "Strings";
question1choices.appendChild(choice2);
choice3.textContent = "DOCTYPE";
question1choices.appendChild(choice3);
choice4.textContent = "Arrays";
question1choices.appendChild(choice4);


