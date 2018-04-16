var timer;

var questions = [ //array containing objects with questions, answer choices, and correct answer
    {
        question: "What is the capital of Syria?",
        answerChoices: ["Benghazi", "Beirut", "Cairo", "Damascus"],
        answerIndex: 3
    },
    {
        question: "Which of these is the world's tallest mountain?",
        answerChoices: ["Mt. Olympus", "Mt. Everest", "Mt. Kilimanjaro", "Mt. Washington"],
        answerIndex: 1
    },
    {
        question: "Which of these is the world's longest river?",
        answerChoices: ["Mississippi", "Ganges", "Nile", "Volta"],
        answerIndex: 2
    },
    {
        question: "What country is home to Mount Kilimanjaro?",
        answerChoices: ["Africa", "Zimbabwe", "Tanzania", "Brazil"],
        answerIndex: 2
    },
    {
        question: "What is the official language of Kenya?",
        answerChoices: ["French", "English", "Afrikaans", "Swahili"],
        answerIndex: 3
    },
    {
        question: "What is the world's most populous city?",
        answerChoices: ["Shanghai", "Beijing", "Tokyo", "Mexico City"],
        answerIndex: 2
    },
    {
        question: "What is the world's smallest country?",
        answerChoices: ["Lichtenstein", "Lithuania", "Vatican City", "Malta"],
        answerIndex: 2
    },
    {
        question: "What is the least densely populated American state?",
        answerChoices: ["Alaska", "Minnesota", "Maine", "Montana"],
        answerIndex: 0
    },
    {
        question: "Which of these is the world's largest body of fresh water?",
        answerChoices: ["Dead Sea", "Caspian Sea", "Lake Baikal", "Lake Superior"],
        answerIndex: 1
    },
    {
        question: "Which of these is the world's largest continent?",
        answerChoices: ["Antarctica", "Asia", "Africa", "North America"],
        answerIndex: 1
    }
]

var userChoices = []; //to store ****INDEX OF**** user's choices

var numCorrect = 0;
var numIncorrect = 0; //WHY DISPLAYING AS 10??????????????*******************
var numUnanswered = questions.length - userChoices.length;

function startScreen() { //works
    $("#main-area").html("<button id='start'>Start</button>") //load start button
    $("#start").on("click", loadQuestions) //load questions function (see below)
}

function loadQuestions() {
    var secondsLeft = 60; //works
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

//NOT WORKING!!!!!!!!!!!!!!!!!!!!
function getQuestion(questionObject) { //to print questions, answers, and radio buttons
    //create HTML elements for each question and return div with that question, correct answer, buttons
    $("#questions-container").append("<div id='this-question'><br>"); //add div for each question
    $("#this-question").text(questionObject.question + "<br>"); //print question text
    for (var x = 0; x < questionObject.answerChoices.length; x++) { //for each answer choice...**********************
        $("this-question").append(questionObject.answerChoices[x]); //print answer text
        $("#this-question").prepend("<input type='radio'></input>"); //add radio button
        $("input").attr("userIndex", x); //assign index to button
    }
}

function endGame() {
    calculate(); 
    $("body").html("<p id='game-done'>"); //generate paragraph to hold the info below
    $("#game-done").append("<h2>Game over!</h2><br>"); //game over message  ***NOT WORKING***************************
    $("#game-done").append("<h4>Correct: " + numCorrect + "</h4>"); //number of correct answers //works
    $("#game-done").append("<h4>Incorrect: " + numIncorrect + "</h4>"); //number of wrong answers ***NW**************
    $("#game-done").append("<h4>Unanswered: " + numUnanswered + "</h4>"); //# of unanswered questions //works
    $("#game-done").append("<button id='play-again'>Play Again!</button>"); //works
    resetGame();
}

function calculate() { //NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    userChoices.push("userIndex"); //push index of user's choice to user choices array (but can't access user index here d/t scope???)
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].answerIndex == (userChoices[i])) { //if index of correct answer = index of user choice...
            numCorrect++; //add 1 to count for correct answers
        } else if (questions[i].answerIndex !== (userChoices[i])) {
            numIncorrect++; //add 1 to count for wrong answers
        }
    }
}
    
function resetGame() { //*****************************************
    $("body").on("click", "#play-again", startScreen) //FUNCTION TO RESET GAME: load start screen, questions & answers
    //WHAT ELSE TO RESET ON GAME START?????
}

////////////////////////////////////

window.onload = function() {
    startScreen(); //load start button & timer
    //ANY OTHER FUNCTIONS NEEDED HERE?????
}