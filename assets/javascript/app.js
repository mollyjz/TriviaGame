var timer;
var userIndex = $("user-index");

var questions = [ //array containing objects with questions, answer choices, and correct answer
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

var userChoices = []; //to store user's choices
//PUSH VALUE TO SELECTE BUTTON TO ARRAY?????

var numCorrect = 0;
var numIncorrect = 0; //WHY DISPLAYING AS 10??????????????*******************************************************
var numUnanswered = questions.length - userChoices.length;

function startScreen() { //works
    $("#main-area").html("<button id='start'>Start</button>") //load start button
    $("#start").on("click", loadQuestions) //load questions function (see below)
    $("#start").on("click", function(){
        $("#start").hide();
    });
}

function loadQuestions() { //works
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
    for (var i = 0; i < questions.length; i++) { //for each question...NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       // $("#questions-container").append("<div id='this-question'></div>"); //add div for each question
        $("#questions-container").append(questions[i].question + "<br>"); //print question text
        for (var x = 0; x < 4; x++) { //for each answer choice...****************************************************
            $("#answers-container").append(questions[i].answerPosition); //print answer text
            $("#answers-container").prepend("<input type='radio'></input>"); //add radio button
            $("input").attr("user-index", questions[i].rightAnswer); //assign answer to its corresponding button
            //var userIndex = $("user-index")
        }
    }    
    $("#done-container").on("click", "#done", function() { //if "done" button is clicked...
    clearInterval(timer); //stop timer
    endGame(); //end game (see endGame function)
});
}
    
//DO AWAY WITH ANSWER INDEX & USER INDEX AND JUST USE ANSWERS!!!!!!!!!!!!1

function endGame() { //works
    calculate(); 
    $("body").html("<p id='game-done'>"); //generate paragraph to hold the info below
    $("#game-done").append("<h2>Game over!</h2><br>"); //game over message
    $("#game-done").append("<h4>Correct: " + numCorrect + "</h4>"); //number of correct answers //works
    $("#game-done").append("<h4>Incorrect: " + numIncorrect + "</h4>"); //number of wrong answers
    $("#game-done").append("<h4>Unanswered: " + numUnanswered + "</h4>"); //# of unanswered questions //works
    $("#game-done").append("<button id='play-again'>Play Again!</button>"); //works
    resetGame();
}

function calculate() { //NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!********************************************
    userChoices.push(userIndex); //push index of user's choice to user choices array (but can't access user index here d/t scope???)
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].rightAnswer == (userChoices[i])) { //if index of correct answer = index of user choice...
            numCorrect++ //add 1 to count for correct answers
        } else if (questions[i].rightAnswer !== (userChoices[i])) {
            numIncorrect++ //add 1 to count for wrong answers
        }
    }
}
    
function resetGame() { //********************************************************************************************
    $("body").on("click", "#play-again", startScreen); //FUNCTION TO RESET GAME: load start screen, questions & answers
    userChoices = []; //to store user's choices
    numCorrect = 0;
    numIncorrect = 0; //WHY DISPLAYING AS 10??????????????*******************
    numUnanswered = questions.length - userChoices.length;
    //WHAT ELSE TO RESET ON GAME START?????
}

////////////////////////////////////

$(document).ready(function(){
    startScreen(); //load start button & timer
    //ANY OTHER FUNCTIONS NEEDED HERE?????
});