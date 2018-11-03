// NOT GRABBING VALUE OF USER'S ANSWER CHOICES!!!!!!!!!!!!!!

//not switching to checked on click!!!!!

// NEED BUTTON TO PLAY AGAIN


var timer;

var questions = [ //should this be a big form?????????????????????????
    {
        question: "What is the capital of Syria?",
        answerChoices: ["Benghazi", "Beirut", "Cairo", "Damascus"], //should this be an object, like with more attributes than just the answers themselves??????????
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
];

var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 10;

function startScreen() {
    $("#main-area").append("<button id='start'>Start</button>") //load start button
    $("#start").on("click", function() {
        $("#start").hide();
    });
    $("#start").on("click", loadQuestions);
};

function loadQuestionHtml() {
    for (var i = 0; i < questions.length; i++) {
        $("#form-container").append('<br>' + questions[i].question + '<br>');
        for (var j = 0; j < questions[i].answerChoices.length; j++) {
            $("#form-container").append('<p><input type="radio" name="question' + '-' + i + '" value="' + questions[i].answerChoices[j] + '">' + "     " +questions[i].answerChoices[j] + "</p>");
        }
    };
};

function loadQuestions() {
    var secondsLeft = 60;
    $("#timer-container").append("<p>Time left: <span id='timer'></span></p><br>"); //load timer
    timer = setInterval(function() {
        secondsLeft--;
        $("#timer").text(secondsLeft);
        if (secondsLeft === 0) { //if time runs out, stop timer and end game
            clearInterval(timer);
            endGame();
            }
    }, 1000);
    $("#done-container").append("<button id='done'>Done</button>");
    loadQuestionHtml();
    $("#done-container").on("click", "#done", function() { //if "done" button is clicked, stop timer & end game
        clearInterval(timer);
        endGame();
    });
};


function calculate() {
    $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val() == questions[0].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        };
    });
    
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].rightAnswer) { //"this" = the radio button that's checked off
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });
    
    $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val() == questions[2].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });
    
    $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val() == questions[3].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });
    
    $.each($("input[name='question-4']:checked"), function() {
        if ($(this).val() == questions[4].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });
    
    $.each($("input[name='question-5']:checked"), function() {
        if ($(this).val() == questions[5].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });
    
    $.each($("input[name='question-6']:checked"), function() {
        if ($(this).val() == questions[6].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });
    
    $.each($("input[name='question-7']:checked"), function() {
        if ($(this).val() == questions[7].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });
    
    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() == questions[8].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });
    
    $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() == questions[9].rightAnswer) {
            numCorrect++;
        } else {
            numIncorrect++;
        }
    });

    numUnanswered = questions.length - (numCorrect + numIncorrect);
};

function endGame() {
    calculate(); 
    $("body").html("<p id='game-done'>");
    $("#game-done").append("<h1>Game over!</h1><br>"); //generate game over message
    $("#game-done").append("<h4>Correct: " + numCorrect + "</h4>"); //number of correct answers
    $("#game-done").append("<h4>Incorrect: " + numIncorrect + "</h4>"); //number of wrong answers
    $("#game-done").append("<h4>Unanswered: " + numUnanswered + "</h4>"); //# of unanswered questions
    $("#game-done").append("<h3><button id='play-again' onClick=location.reload()>Play again!</button></h3>");
};


$(document).ready(function() {
    startScreen();
});