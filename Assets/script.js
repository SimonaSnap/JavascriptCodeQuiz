//Global variables having to do with the landing screen of the quiz
//the starting message and quiz button
var body = document.body;
var pressButton = document.createElement("button");
var startMessage = document.createElement("h1");
var rulesrecap = document.createElement("h5");
var landingMessage = document.createElement("div");
body.appendChild(landingMessage);
landingMessage.appendChild(startMessage);
landingMessage.appendChild(rulesrecap);
landingMessage.setAttribute("id", "homepage")
body.appendChild(pressButton);
startMessage.textContent = "Click to start a short quiz on Coding";
rulesrecap.textContent = "+1 point with every right answer, -1 point for every wrong answer. Can you get all 5 points?";
pressButton.textContent = "Start Quiz";
pressButton.setAttribute("id", "start");
pressButton.addEventListener("click", startQuiz);

//this connects the button to the h1 element in the html and is what will then trigger the timer
//the timekeeper id helps me hide the timer at later parts of the application
var launch = document.querySelector("#start");
var statement = document.querySelector(".time");
statement.setAttribute("id", "timeKeeper");

//this sets certain variables that then help trigger events or limit an event
let timeLeft = 60;
let playerScore = 0;
let counter = 1;
var timerInterval = null;

//the next arrays are what i use as textcontent as i set up the questions
var possibleQuestions = ["Commonly used Javascript datatypes do NOT include?", "Javascript can be used for?", "What is the right way to make comments in Javascript?", "What does HTML stand for?", "What does CSS stand for?"]

var firstSetChoices = ["Objects", "Strings", "DOCTYPE", "Arrays"];
var secondSetChoices = ["Front-End Development", "Back-End Development", "Full Stack Coding", "All of the Above"];
var thirdSetChoices = ["/* */", "//", "<-- -->", "This is a comment: "];
var fourthSetChoices = ["Harry Terry Merry Larry", "Hyper Text Markup Language", "Holy Text Motherland Language", "Hyperfocused Texting Meme Language"];
var fifthSetChoices = ["Cascading Style Sheets", "Cranky Soul Sounds", "Cascade Sold Sheets", "None of the Above"];


//this is the quiz itself - what happens once "start quiz" is clicked
function startQuiz()
{
    //this helps hide everything that came on the starting screen
    var startingPoint = document.getElementById("start");
    startingPoint.hidden = true;
    var homedisplay = document.getElementById("homepage");
    homedisplay.hidden = true;
    setTimer();


    //what happens when a button linked to this function is clicked
    //playerscore goes down if it is not zero, and also drops the timer
    //the counter helps trigger the next question function to come up, therefore the variable that keeps the quiz going
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

    //this basically does a lot of what wrong question does except no deductions
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

    //this is a function that i repeat the structure for each individual question
    //the following questions hide the previous function so that only one question is on the screen
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


    //this is the timer function, the null reference makes sure that the timer doesn't launch the quizEnd function a second time in case the player finishes the quiz quickly
    function setTimer()
    {
        timerInterval = setInterval(function ()
        {
            timeLeft--;
            statement.textContent = timeLeft + " seconds remaining";

            if ((timeLeft == 0) && (timerInterval != null))
            {
                clearInterval(timerInterval);
                timerInterval = null;
                quizEnd();
            }
        }, 1000);
    }



    //clears the function and last question, and then displays the player's score
    //asks for the player's initials and then adds the score and initials to the localstorage
    function quizEnd()
    {
        if (timerInterval != null)
        {
            clearInterval(timerInterval);
            timerInterval = null;
        }
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

        //the split parses out the array that was last in storage and then pushes it to the array above it
        //however push makes the split array into one item once again - it works for now so i'm not touching it
        //but it would be better to set the empty array to the localstorage split array, as i do in the highscores function
        action.addEventListener("click", function (event)
        {
            event.preventDefault();

            var player = take.value;
            var initials = [];
            var inStorage = localStorage.getItem("player");
            if (null != inStorage)
            {
                initials.push(inStorage.split(","));
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
                initials.push(player);
                localStorage.setItem("player", initials.toString());

                allScores.push(playerScore);
                localStorage.setItem("score", allScores.toString());
                highscores();
            }

        })

    }




    //clears the endscreen stuff and creates the ul that will append the list scores
    function highscores()
    {
        var endScreen = document.getElementById("recap");
        endScreen.hidden = true;

        var scoreList = document.createElement("ul");
        scoreList.setAttribute("id", "finalscreen");
        body.appendChild(scoreList);


        //this was what i talked about above the endQuiz function
        //by setting the empty array equal to the local storage array, the length of the array doesnt change to 1
        //as it would if i used push
        var playerArray = [];
        var playerSubmits = localStorage.getItem("player");
        if (null != playerSubmits)
        {
            playerArray = playerSubmits.split(",");
        }

        var scoreArray = [];
        var allScores = localStorage.getItem("score");
        if (null != allScores)
        {
            scoreArray = allScores.split(",");
        }

        //i can use playerArray.length in the for conditions because for every score submitted there should be an initials
        //the end text is an empty string that adds the player initials and score in the array
        //and everytime a new list item is then made that takes in that text and appends it to the list
        function endList()
        {

            for (var i = 0; i < playerArray.length; i++)
            {
                var endText = "";
                endText = playerArray[i];
                endText += " --- ";
                endText += scoreArray[i];
                var liEl = document.createElement("li");
                var textNode = document.createTextNode(endText);
                liEl.appendChild(textNode);
                document.getElementById("finalscreen").appendChild(liEl);
            }
        }

        endList();

    }

    //calling the firstQuestion function starts the whole process
    firstQuestion();
}








