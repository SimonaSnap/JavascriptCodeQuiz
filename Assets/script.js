//creating the button to start the quiz
var body = document.body;
var pressButton = document.createElement("button");
body.appendChild(pressButton)
pressButton.textContent = "Start Quiz";

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

//pressButton.addEventListener("click", setTimer);

//creating the first question
var questionQuiz1 = function firstQuestion()
{
    var question1Container = document.createElement("div");
    var question1 = document.createElement("h2");
    var question1choices = document.createElement("ul")

    var choice1 = document.createElement("li");
    var choice2 = document.createElement("li");
    var choice3 = document.createElement("li");
    var choice4 = document.createElement("li");

    var choiceSelect1 = document.createElement("button");
    var choiceSelect2 = document.createElement("button");
    var choiceSelect3 = document.createElement("button");
    var choiceSelect4 = document.createElement("button");

    question1.textContent = "Commonly used Javascript datatypes do NOT include?"
    body.appendChild(question1Container)
    question1Container.appendChild(question1);
    question1Container.appendChild(question1choices);
    question1Container.setAttribute("id", "container")

    choice1.append(choiceSelect1)
    choiceSelect1.textContent = "Objects";
    question1choices.appendChild(choice1);
    choice2.append(choiceSelect2)
    choiceSelect2.textContent = "Strings";
    question1choices.appendChild(choice2);
    choice3.append(choiceSelect3)
    choiceSelect3.textContent = "DOCTYPE";
    question1choices.appendChild(choice3);
    choice4.append(choiceSelect4)
    choiceSelect4.textContent = "Arrays";
    question1choices.appendChild(choice4);

    if (choice1.addEventListener("click", secondQuestion))
    {
        questionQuiz1.setAttribute("css", "display: none;")
    }
    else if (choice2.addEventListener("click", secondQuestion))
    {
    }

    else if (choice3.addEventListener("click", secondQuestion))
    {
        close(firstQuestion)
    }

    else if (choice4.addEventListener("click", secondQuestion))
    {
        return
    }
}

pressButton.addEventListener("click", questionQuiz1);



function secondQuestion()
{

    //the containers for the list and the question
    var question2 = document.createElement("h2");
    var question2choices = document.createElement("ul")

    //the list items to select from
    var choice1 = document.createElement("li");
    var choice2 = document.createElement("li");
    var choice3 = document.createElement("li");
    var choice4 = document.createElement("li");

    //making the list items into buttons, to then trigger the next action as well
    var choiceSelect1 = document.createElement("button");
    var choiceSelect2 = document.createElement("button");
    var choiceSelect3 = document.createElement("button");
    var choiceSelect4 = document.createElement("button");

    question2.textContent = "Javascript can be used for?"
    body.appendChild(question2);
    body.appendChild(question2choices);

    choice1.append(choiceSelect1)
    choiceSelect1.textContent = "Front-End Development";
    question2choices.appendChild(choice1);
    choice2.append(choiceSelect2)
    choiceSelect2.textContent = "Back-End Development";
    question2choices.appendChild(choice2);
    choice3.append(choiceSelect3)
    choiceSelect3.textContent = "Full Stack Coding";
    question2choices.appendChild(choice3);
    choice4.append(choiceSelect4)
    choiceSelect4.textContent = "All of the Above";
    question2choices.appendChild(choice4);
}


//setting attributes

