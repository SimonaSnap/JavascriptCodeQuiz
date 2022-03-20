var body = document.body;
var pressButton = document.createElement("button");
body.appendChild(pressButton)
pressButton.textContent = "Start Quiz";
pressButton.setAttribute("id", "start")

var launch = document.querySelector("#start");
var statement = document.querySelector(".time");
statement.setAttribute("id", "timeKeeper");

let timeLeft = 60;
let playerScore = 0;
let counter = 1;

var possibleQuestions = ["Commonly used Javascript datatypes do NOT include?", "Javascript can be used for?", "What is the right way to make comments in Javascript?", "What does HTML stand for?", "What does CSS stand for?"]

var firstSetChoices = ["Objects", "Strings", "DOCTYPE", "Arrays"];
var secondSetChoices = ["Front-End Development", "Back-End Development", "Full Stack Coding", "All of the Above"];
var thirdSetChoices = ["/* */", "//", "<-- -->", "This is a comment: "];
var fourthSetChoices = ["Harry Terry Merry Larry", "Hyper Text Markup Language", "Holy Text Motherland Language", "Hyperfocused Texting Meme Language"];
var fifthSetChoices = ["Cascading Style Sheets", "Cranky Soul Sounds", "Cascade Sold Sheets", "None of the Above"];


function startQuiz()
{
    var startingPoint = document.getElementById("start");
    startingPoint.hidden = true;
    setTimer();


    function wrongAnswer()
    {
        if (playerScore > 0)
        {
            playerScore--
            console.log(playerScore)
        }
        if (timeLeft > 10)
        {
            timeLeft = timeLeft - 10;
            console.log(timeLeft)
        }
        else
        {
            quizEnd();
        }
        counter++

        if (counter === 1)
        {
            firstQuestion()
        }
        else if (counter === 2)
        {
            secondQuestion()
        }
        else if (counter === 3)
        {
            thirdQuestion()
        }
        else if (counter === 4)
        {
            fourthQuestion()
        }
        else if (counter === 5)
        {
            fifthQuestion()
        }
        else
        {
            quizEnd()
        }
    }


    function rightAnswer()
    {
        playerScore++;
        console.log(playerScore);
        counter++

        if (counter === 1)
        {
            firstQuestion()
        }
        else if (counter === 2)
        {
            secondQuestion()
        }
        else if (counter === 3)
        {
            thirdQuestion()
        }
        else if (counter === 4)
        {
            fourthQuestion()
        }
        else if (counter === 5)
        {
            fifthQuestion()
        }
        else
        {
            quizEnd()
        }
    }

    function firstQuestion()
    {
        var listEl = document.createElement("ul");
        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var question1 = document.createElement("div");
        question1.setAttribute("id", "firstq");
        body.append(question1);
        var ask1 = document.createElement("h2");
        question1.append(ask1);
        ask1.textContent = possibleQuestions[0];
        question1.append(listEl);

        listEl.append(choice1);
        choice1.textContent = firstSetChoices[0];
        choice1.addEventListener("click", wrongAnswer)

        listEl.append(choice2);
        choice2.textContent = firstSetChoices[1];
        choice2.addEventListener("click", wrongAnswer)

        listEl.append(choice3);
        choice3.textContent = firstSetChoices[2];
        choice3.addEventListener("click", rightAnswer)

        listEl.append(choice4);
        choice4.textContent = firstSetChoices[3];
        choice4.addEventListener("click", wrongAnswer)


    }
    firstQuestion();

    function secondQuestion()
    {

        var listEl = document.createElement("ul");
        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var question1 = document.getElementById("firstq");
        question1.hidden = true;
        //question1.innerHTML = "<div></div>"

        var question2 = document.createElement("div")
        question2.setAttribute("id", "secondq");
        body.append(question2);
        var ask2 = document.createElement("h2");
        question2.append(ask2);
        ask2.textContent = possibleQuestions[1];
        question2.append(listEl);
        listEl.append(choice1);
        choice1.textContent = secondSetChoices[0];
        choice1.addEventListener("click", wrongAnswer)

        listEl.append(choice2);
        choice2.textContent = secondSetChoices[1]
        choice2.addEventListener("click", wrongAnswer)

        listEl.append(choice3);
        choice3.textContent = secondSetChoices[2];
        choice3.addEventListener("click", wrongAnswer)

        listEl.append(choice4);
        choice4.setAttribute("class", "correct")
        choice4.textContent = secondSetChoices[3];
        choice4.addEventListener("click", rightAnswer)

    }


    function thirdQuestion()
    {

        var listEl = document.createElement("ul");
        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var question2 = document.getElementById("secondq");
        question2.hidden = true;

        var question3 = document.createElement("div");
        question3.setAttribute("id", "thirdq")
        body.append(question3);
        var ask3 = document.createElement("h2");
        question3.append(ask3);
        ask3.textContent = possibleQuestions[2];
        question3.append(listEl);

        listEl.append(choice1);
        choice1.textContent = thirdSetChoices[0];
        choice1.addEventListener("click", wrongAnswer)

        listEl.append(choice2);
        choice2.textContent = thirdSetChoices[1]
        choice2.addEventListener("click", rightAnswer)

        listEl.append(choice3);
        choice3.setAttribute("class", "correct")
        choice3.textContent = thirdSetChoices[2];
        choice3.addEventListener("click", wrongAnswer)

        listEl.append(choice4);
        choice4.textContent = thirdSetChoices[3];
        choice4.addEventListener("click", wrongAnswer)

    }

    function fourthQuestion()
    {

        var listEl = document.createElement("ul");
        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var question3 = document.getElementById("thirdq");
        question3.hidden = true;

        var question4 = document.createElement("div");
        question4.setAttribute("id", "fourthq")
        body.append(question4);
        var ask4 = document.createElement("h2");
        question4.append(ask4);
        ask4.textContent = possibleQuestions[3];
        question4.append(listEl);

        listEl.append(choice1);
        choice1.textContent = fourthSetChoices[0];
        choice1.addEventListener("click", wrongAnswer)

        listEl.append(choice2);
        choice2.textContent = fourthSetChoices[1]
        choice2.addEventListener("click", rightAnswer)

        listEl.append(choice3);
        choice3.textContent = fourthSetChoices[2];
        choice3.addEventListener("click", wrongAnswer)

        listEl.append(choice4);
        choice4.textContent = fourthSetChoices[3];
        choice4.addEventListener("click", wrongAnswer)

    }


    function fifthQuestion()
    {

        var listEl = document.createElement("ul");
        var choice1 = document.createElement("li");
        var choice2 = document.createElement("li");
        var choice3 = document.createElement("li");
        var choice4 = document.createElement("li");

        var question4 = document.getElementById("fourthq");
        question4.hidden = true;

        var question5 = document.createElement("div");
        question5.setAttribute("id", "fifthq");
        body.append(question5);
        var ask5 = document.createElement("h2");
        question5.append(ask5);
        ask5.textContent = possibleQuestions[4];
        question5.append(listEl);

        listEl.append(choice1);
        choice1.textContent = fifthSetChoices[0];
        choice1.addEventListener("click", rightAnswer)

        listEl.append(choice2);
        choice2.textContent = fifthSetChoices[1]
        choice2.addEventListener("click", wrongAnswer)

        listEl.append(choice3);
        choice3.textContent = fifthSetChoices[2];
        choice3.addEventListener("click", wrongAnswer)

        listEl.append(choice4);
        choice4.textContent = fifthSetChoices[3];
        choice4.addEventListener("click", wrongAnswer)
    }


    function setTimer()
    {
        var timerInterval = setInterval(function ()
        {
            timeLeft--;
            statement.textContent = timeLeft + " seconds remaining";

            if (timeLeft === 0)
            {
                clearInterval(timerInterval);
                quizEnd();
            }
        }, 1000);
    }


    function quizEnd()
    {
        var question5 = document.getElementById("fifthq");
        question5.hidden = true;

        var clock = document.getElementById("timeKeeper");
        clock.hidden = true;

        var endScreen = document.createElement("div")
        endScreen.setAttribute("id", "recap")
        var recap = document.createElement("p");
        recap.textContent = "Your total score: " + playerScore;
        body.appendChild(endScreen);
        endScreen.appendChild(recap);

        var take = document.createElement("input");
        take.type = "text";
        take.value = "";
        take.setAttribute("placeholder", " Type in your initials to store highscore");
        var action = document.createElement("button");
        action.textContent = "Submit";

        endScreen.appendChild(take);
        endScreen.appendChild(action);

        var message = document.createElement("h3");
        body.appendChild(message);

        action.addEventListener("click", function (event)
        {
            event.preventDefault();

            var player = take.value;
            var submitted = [];
            var inStorage = localStorage.getItem("player");
            if (null != inStorage)
            {
                submitted.push(inStorage.split(","));
            }

            var allScores = [];
            var scoreStorage = localStorage.getItem("score");
            if (null != scoreStorage)
            {
                allScores.push(scoreStorage.split(","));
            }


            if (player == "")
            {
                message.textContent = "Please input your initials";
            }
            else
            {
                message.textContent = "Fantastic Job!";
                submitted.push(player);
                localStorage.setItem("player", player.toString());

                allScores.push(playerScore);
                localStorage.setItem("score", playerScore.toString());
                message.textContent = localStorage.getItem("player");
            }

        })

    }




    function highscores()
    {
        var endScreen = document.getElementById("recap");
        endScreen.hidden = true;

        var player = localStorage.getItem("player");
        var score = localStorage.getItem("score");

        var scoreList = document.createElement("ol");
        var aScore = document.createElement("li");

        body.appendChild(scoreList);
        scoreList.appendChild(aScore);
        aScore.textContent = player + " --- " + score;

    }


}








pressButton.addEventListener("click", startQuiz);