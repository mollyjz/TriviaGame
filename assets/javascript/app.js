/*
BEST WAY TO STORE AND LOAD ALL ANSWER CHOICES?
HOW TO KEEP TRACK OF RIGHT/WRONG/UNANSWERED ANSWERS WITHOUT COUNTING EACH TIME ANY CHOICE IS SELECTED????
NEED AN ARRAY TO HOLD ANSWER OPTIONS FOR EACH QUESTION?
*/

//MAKE OBJECT TO HOLD EACH QUESTION, ANSWERS
//array of objects

var timer;

var questions = [ //array containing objects with questions, answer choices, and correct answer
    {
        question: "What is the capital of Syria?",
        answerChoices: ["Benghazi", "Beirut", "Cairo", "Damascus"],
        answerIndex: 3,
    },
    {
        question: "What is the tallest mountain in the world?",
        answerChoices: ["Mt. Everest", "Mt. Olympus", "Mt. Kilimanjaro", "Mt. Washington"],
        answerIndex: 0,
    },
    {
        question:"What is the longest river in the world?",
        answerChoices: ["Mississippi", "Ganges", "Nile", "Volta"],
        answerIndex: 2 //c is right answer,
    },
    {
        question:"What country is home to Mount Kilimanjaro?",
        answerChoices: ["Africa", "Zimbabwe", "c", "d"],
        answerIndex: 2 //c is right answer,
    },
    {
        question:"What is the official language of Chad?",
        answerChoices: ["a", "b", "c", "d"],
        answerIndex: 2 //c is right answer,
    },
    {
        question:"What is the longest river in the world?",
        answerChoices: ["a", "b", "c", "d"],
        answerIndex: 2 //c is right answer,
    },
    {
        question:"What is the longest river in the world?",
        answerChoices: ["a", "b", "c", "d"],
        answerIndex: 2 //c is right answer,
    },
    {
        question:"What is the longest river in the world?",
        answerChoices: ["a", "b", "c", "d"],
        answerIndex: 2 //c is right answer,
    },
    {
        question:"What is the longest river in the world?",
        answerChoices: ["a", "b", "c", "d"],
        answerIndex: 2 //c is right answer,
    },
    {
        question:"What is the longest river in the world?",
        answerChoices: ["a", "b", "c", "d"],
        answerIndex: 2 //c is right answer,
        //userIndex: undefined
    }
] //ON START BUTTON CLICK, loop through questions, print to screen along with answer choices & radio buttons***************************************

var userChoices = []; //to store ****INDEX OF**** user's choices
//*****AT END*****, loop through and push user's answer to array

var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = questions.length - userChoices.length;  //number of questions not answered by user
//loop through all questions and chosen answers **AT END** to determine # correct and incorrect

function startScreen() {
    $("#main-area").html("<button id='start'>Start</button>") //load start button
    $("#start").on("click", loadQuestions) //load questions function (see below)
}

function loadQuestions() {
    var secondsLeft = 60;
    $("#main-area").html("<p>Time left: <span id='timer'></span></p><br>"); //load timer
    timer = setInterval(function() { //timer function--every second...
        secondsLeft--;  //decrease seconds left by 1
        $("#timer").text(secondsLeft); //display seconds left
        if (secondsLeft === 0) { //if time runs out...
            clearInterval(timer);  //stop timer
            endGame(); //end game (see endGame function)
            }
    }, 1000);
    $("#done-container").append("<button id='done'>Done</button>"); //load "done" button   
    $("#done-container").on("click", "#done", function() { //if "done" button is clicked...
        clearInterval(timer); //stop timer
        endGame(); //end game (see endGame function)
    });
    for (var i = 0; i < questions.length; i++) { //for each question... //NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!
        var questionHTML = getQuestion(questions[i]); //load question text from corresponding object in array
        $("#questions-container").append(questionHTML); //append questions, answers, & buttons for each question
    }
}

function getQuestion(questionObject) { //to print questions, answers, and radio buttons
    //create HTML elements for each question and return div with that question, correct answer, buttons
    $("#questions-container").html("<div id='this-question'><br>"); //add div for each question
    $("#this-question").text(questionObject.question + "<br>"); //print question text
    for (var x = 0; x < questionObject.answerChoices.length; x++) { //for each answer choice...**********************
        $("this-question").append(questionObject.answerChoices[x]); //print answer text
        $("#this-question").prepend("<input type='radio'></input>"); //add radio button
        $("input").attr("userIndex", x); //assign index to button ******************************
    }
}

function endGame() { //NOT WORKING!!!!!!!!!
    calculate(); 
    $("body").html("<p id='game-done'>") //generate paragraph to hold the info below
    $("#game-done").html("<h2>Game over!</h2><br>"); //game over message
    $("#game-done").html("<h4>Correct: " + numCorrect + "</h4><br>"); //number of correct answers
    $("#game-done").html("<h4>Incorrect: " + numIncorrect + "</h4><br>"); //number of wrong answers
    $("#game-done").html("<h4>Unanswered: " + numUnanswered + "</h4><br>"); //number of unanswered questions
    $("#game-done").html("<button id='play-again'>Play Again!</button>");
    resetGame();
}

function calculate() { //NOT WORKING!!!!!!!!!!!!
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].answerIndex == (userChoices[i])) { //if index of correct answer = index of user choice...
            numCorrect++;
        } else if (questions[i].answerIndex !== (userChoices[i])) {
            numIncorrect++;
        }
    }
}
    
function resetGame() { //*****************************************
    $("#play-again").on("click", startScreen()) //FUNCTION TO RESET GAME: load start screen, questions & answers
}
    

////////////////////////////////////

window.onload = function() {
    startScreen(); //load start button & timer
}