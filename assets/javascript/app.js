var timer;

var questions = [
    {
        question: "What is the capital of Syria?",
        answerChoices: ["Benghazi", "Beirut", "Cairo", "Damascus"],
        rightAnswer: "Damascus"
    },
    {
        question: "Which of these is the world's tallest mountain?",
        answerChoices: ["Mt. Olympus", "Mt. Everest", "Mt. Kilimanjaro", "Mt. Washington"],
        rightAnswer: "Mt. Everest"
    },
    {
        question: "Which of these is the world's longest river?",
        answerChoices: ["Mississippi", "Ganges", "Nile", "Volta"],
        rightAnswer: "Nile"
    },
    {
        question: "What country is home to Mount Kilimanjaro?",
        answerChoices: ["Africa", "Zimbabwe", "Tanzania", "Brazil"],
        rightAnswer: "Tanzania"
    },
    {
        question: "What is the official language of Kenya?",
        answerChoices: ["French", "English", "Afrikaans", "Swahili"],
        rightAnswer: "Swahili"
    },
    {
        question: "What is the world's most populous city?",
        answerChoices: ["Shanghai", "Beijing", "Tokyo", "Mexico City"],
        rightAnswer: "Tokyo"
    },
    {
        question: "What is the world's smallest country?",
        answerChoices: ["Lichtenstein", "Lithuania", "Vatican City", "Malta"],
        rightAnswer: "Vatican City"
    },
    {
        question: "What is the least densely populated American state?",
        answerChoices: ["Alaska", "Texas", "Maine", "Montana"],
        rightAnswer: "Alaska"
    },
    {
        question: "Which of these is the world's largest body of fresh water?",
        answerChoices: ["Dead Sea", "Caspian Sea", "Lake Baikal", "Lake Superior"],
        rightAnswer: "Caspian Sea"
    },
    {
        question: "Which of these is the world's largest continent?",
        answerChoices: ["Antarctica", "Asia", "Africa", "North America"],
        rightAnswer: "Asia"
    }
]

var userChoices = [];

var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = questions.length - userChoices.length;

function startScreen() { //works
    $("#main-area").html("<button id='start'>Start</button>") //load start button
    $("#start").on("click", function() {
        $("#start").hide();
    });
    $("#start").on("click", loadQuestions) //load questions function (see below)
}

function loadQuestionHtml() { //loop works but questions not loading
    for (var i = 0; i < 10; i++) { //for each question...
        $("#questions-container").append(questions[i].question); //print question text  ********NOT WORKING********
         //console.log("Hey")
         //console.log(questions[2].rightAnswer) //object registering but not being printed
        for (var x = 0; x < 4; x++) { //for each answer choice...
             $("#answers-container").append(questions[i].answerChoices); //print answer text
             $("#answers-container").prepend("<input type='radio' id='radio-buttons'></input>"); //add radio button
             $("#radio-buttons").val(questions[i].answerChoices[x]); //assign value (answer) to radio button
             //console.log("Hello")
         }
        }
    }

function loadQuestions() {
    var secondsLeft = 60; //works
    $("#main-area").append("<p>Time left: <span id='timer'></span></p><br>"); //load timer
    timer = setInterval(function() { //timer function--every second...
        secondsLeft--;  //decrease seconds left by 1
        $("#timer").text(secondsLeft); //display seconds left
        if (secondsLeft === 0) { //if time runs out...
            clearInterval(timer);  //stop timer
            endGame(); //end game (see endGame function)
            }
    }, 1000);
    $("#done-container").append("<button id='done'>Done</button>"); //load "done" button   
    loadQuestionHtml();
    $("#done-container").on("click", "#done", function() { //if "done" button is clicked...
    clearInterval(timer); //stop timer
    endGame(); //end game (see endGame function)
});
}

function endGame() { //works
    calculate(); 
    $("body").html("<p id='game-done'>"); //generate paragraph to hold the info below
    $("#game-done").append("<h2>Game over!</h2><br>"); //game over message
    $("#game-done").append("<h4>Correct: " + numCorrect + "</h4>"); //number of correct answers //works
    $("#game-done").append("<h4>Incorrect: " + numIncorrect + "</h4>"); //number of wrong answers
    $("#game-done").append("<h4>Unanswered: " + numUnanswered + "</h4>"); //# of unanswered questions //works
    //$("#game-done").append("<button id='play-again'>Play Again!</button>"); //works
    //resetGame();
}

function calculate() { //seems to be working?
    //console.log("Is this working?")
    for (var i = 0; i < questions.length; i++) { //loop seems to be running
        if ($("input[type=radio]:checked")) { //if a radio button is selected, push its value(answer) to 
            userChoices.push($("#radio-buttons").val());
        } if (questions[i].rightAnswer == (userChoices[i])) { //if correct answer = user choice...
            numCorrect++; //add 1 to count for correct answers
        } if (questions[i].rightAnswer !== (userChoices[i])) {
            numIncorrect++; //add 1 to count for wrong answers
        } //this is set to 10 because userChoices is not defined and thus not equal to right answer
        //console.log("Anyone there?")
    }
}

////////////////////////////////////

$(document).ready(function(){
    startScreen(); //load start button & timer
});