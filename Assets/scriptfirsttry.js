//creating the button to start the quiz
var body = document.body;
var pressButton = document.createElement("button");
body.appendChild(pressButton)
pressButton.textContent = "Start Quiz";

//creating a timer and linking it to the start button
var launch = document.querySelector("#start");
var statement = document.querySelector(".time");

let timeLeft = 60;
let scoreKeeper = 3;

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
function codeQuiz(event)
{
    event.stopImmediatePropagation();


    function firstQuestion()
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
        choiceSelect1.setAttribute("class", "wrong");
        choiceSelect2.setAttribute("class", "wrong");
        choiceSelect4.setAttribute("class", "wrong");

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

        function wrongAnswer()
        {
            var incorrect = document.getElementsByClassName("wrong")
            incorrect.onclick = questionQuiz2;
            if (scoreKeeper > 0)
            {
                scoreKeeper--;
            }
            console.log(scoreKeeper);
        }

        return wrongAnswer();

    }

    var questionQuiz2 = function secondQuestion()
    {
        var question2Container = document.createElement("div");
        var question2 = document.createElement("h2");
        var question2choices = document.createElement("ul")

        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var choiceSelect1 = document.createElement("button");
        var choiceSelect2 = document.createElement("button");
        var choiceSelect3 = document.createElement("button");
        var choiceSelect4 = document.createElement("button");

        question2.textContent = "Javascript can be used for?"
        body.appendChild(question2Container)
        question2Container.appendChild(question2);
        question2Container.appendChild(question2choices);
        question2Container.setAttribute("id", "secondContainer")

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


        if (choice1.addEventListener("click", questionQuiz3))
        {
            timeLeft = timeLeft - 10;
            return
        }
        else if (choice2.addEventListener("click", questionQuiz3))
        {
            timeLeft = timeLeft - 10;
            return
        }

        else if (choice3.addEventListener("click", questionQuiz3))
        {
            timeLeft = timeLeft - 10;
            return
        }

        else if (choice4.addEventListener("click", questionQuiz3))
        {
            return
        }
    }

    var questionQuiz3 = function thirdQuestion()
    {
        var question3Container = document.createElement("div");
        var question3 = document.createElement("h2");
        var question3choices = document.createElement("ul")

        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var choiceSelect1 = document.createElement("button");
        var choiceSelect2 = document.createElement("button");
        var choiceSelect3 = document.createElement("button");
        var choiceSelect4 = document.createElement("button");

        question3.textContent = "What is the right way to make comments in Javascript?"
        body.appendChild(question3Container)
        question3Container.appendChild(question3);
        question3Container.appendChild(question3choices);
        question3Container.setAttribute("id", "thirdContainer")

        choice1.append(choiceSelect1)
        choiceSelect1.textContent = "/* */";
        question3choices.appendChild(choice1);
        choice2.append(choiceSelect2)
        choiceSelect2.textContent = "//";
        question3choices.appendChild(choice2);
        choice3.append(choiceSelect3)
        choiceSelect3.textContent = "<-- -->";
        question3choices.appendChild(choice3);
        choice4.append(choiceSelect4)
        choiceSelect4.textContent = "This is a comment: ";
        question3choices.appendChild(choice4);


        if (choice1.addEventListener("click", questionQuiz4))
        {
            timeLeft = timeLeft - 10;
            return
        }
        else if (choice2.addEventListener("click", questionQuiz4))
        {
            return
        }

        else if (choice3.addEventListener("click", questionQuiz4))
        {
            timeLeft = timeLeft - 10;
            return
        }

        else if (choice4.addEventListener("click", questionQuiz4))
        {
            timeLeft = timeLeft - 10;
            return
        }
    }

    var questionQuiz4 = function fourthQuestion()
    {
        var question4Container = document.createElement("div");
        var question4 = document.createElement("h2");
        var question4choices = document.createElement("ul")

        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var choiceSelect1 = document.createElement("button");
        var choiceSelect2 = document.createElement("button");
        var choiceSelect3 = document.createElement("button");
        var choiceSelect4 = document.createElement("button");

        question4.textContent = "What does HTML stand for?"
        body.appendChild(question4Container)
        question4Container.appendChild(question4);
        question4Container.appendChild(question4choices);
        question4Container.setAttribute("id", "fourthContainer")

        choice1.append(choiceSelect1)
        choiceSelect1.textContent = "Harry Terry Merry Larry";
        question4choices.appendChild(choice1);
        choice2.append(choiceSelect2)
        choiceSelect2.textContent = "Hyper Text Markup Language";
        question4choices.appendChild(choice2);
        choice3.append(choiceSelect3)
        choiceSelect3.textContent = "Holy Text Motherland Language";
        question4choices.appendChild(choice3);
        choice4.append(choiceSelect4)
        choiceSelect4.textContent = "Hyperfocused Texting Meme Language";
        question4choices.appendChild(choice4);


        if (choice1.addEventListener("click", questionQuiz5))
        {
            timeLeft = timeLeft - 10;
            return
        }
        else if (choice2.addEventListener("click", questionQuiz5))
        {
            return
        }

        else if (choice3.addEventListener("click", questionQuiz5))
        {
            timeLeft = timeLeft - 10;
            return
        }

        else if (choice4.addEventListener("click", questionQuiz5))
        {
            timeLeft = timeLeft - 10;
            return
        }
    }


    var questionQuiz5 = function fifthQuestion()
    {
        var question5Container = document.createElement("div");
        var question5 = document.createElement("h2");
        var question5choices = document.createElement("ul")

        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var choiceSelect1 = document.createElement("button");
        var choiceSelect2 = document.createElement("button");
        var choiceSelect3 = document.createElement("button");
        var choiceSelect4 = document.createElement("button");

        question5.textContent = "What does CSS stand for?"
        body.appendChild(question5Container)
        question5Container.appendChild(question5);
        question5Container.appendChild(question5choices);
        question5Container.setAttribute("id", "fifthContainer")

        choice1.append(choiceSelect1)
        choiceSelect1.textContent = "Cascading Style Sheets";
        question5choices.appendChild(choice1);
        choice2.append(choiceSelect2)
        choiceSelect2.textContent = "Cranky Soul Sounds";
        question5choices.appendChild(choice2);
        choice3.append(choiceSelect3)
        choiceSelect3.textContent = "Cascade Sold Sheets";
        question5choices.appendChild(choice3);
        choice4.append(choiceSelect4)
        choiceSelect4.textContent = "None of the Above";
        question5choices.appendChild(choice4);


        if (choice1.addEventListener("click", scoreTally))
        {
            return
        }
        else if (choice2.addEventListener("click", scoreTally))
        {
            timeLeft = timeLeft - 10;
            return
        }

        else if (choice3.addEventListener("click", scoreTally))
        {
            timeLeft = timeLeft - 10;
            return
        }

        else if (choice4.addEventListener("click", scoreTally))
        {
            timeLeft = timeLeft - 10;
            return
        }
    }

    var scoreTally = function goToHighscore()
    {
        var box = document.createElement("div")
        body.appendChild(box)
    }
    firstQuestion();
}

pressButton.addEventListener("click", codeQuiz);

//setting attributes

