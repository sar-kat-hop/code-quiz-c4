let quizQuestions = [
    {
        question: "What is NOT a commonly used data type in JS?",
        answers: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers"
        ],
        correct: "Alerts"
    },
    {
        question: "When assigned to a variable, what must String values be enclosed with?",
        answers: [
            "Curly brackets",
            "Quotes",
            "Commas",
            "Parentheses"
        ],
        correct: "Quotes"
    },
    {
        question: "In an `if/else` statement, what is the condition enclosed by?",
        answers: [
            "Parentheses",
            "Angle brackets",
            "Quotes",
            "Curly brackets"
        ],
        correct: "Parentheses"
    },
    {
        question: "A JS array can be used to store...",
        answers: [
            "Other arrays",
            "Numbers",
            "Strings",
            "All of the above"
        ],
        correct: "All of the above"
    }
];

const welcomeEl = document.getElementById("welcome-container");
const startBtn = document.getElementById("start-button");
const quizEl = document.getElementById("quiz-container");

const answerEl = document.getElementById("answer-container");
const answerButtons = document.getElementsByClassName("answer-button");
const buttonA = document.getElementById("A");
const buttonB = document.getElementById("B");
const buttonC = document.getElementById("C");
const buttonD = document.getElementById("D");

const feedbackEl = document.getElementById("feedback-container");
const countdownEl = document.getElementById("countdown-container");

const submitEl = document.querySelectorAll("submit-container");
const submitBtn = document.getElementById("submit-button");

var firstQuestion = 0;
var lastQuestion = quizQuestions.length -1; //length is +1 longer than the array so need to -1
const totalTime = 60;
let timeLeft = totalTime;
let timeInterval;
let score = 0;
let count = 0;
// submitBtn.disabled = true;

function startQuiz() {
    startBtn.disabled = true;
    welcomeEl.style.visibility = 'hidden';
    // submitBtn.disabled = true;
    startTimer();
    displayQuestion();
}

function displayQuestion() {
    let quizPrompt = quizQuestions[firstQuestion];
    answerEl.style.visibility = "visible";
    quizEl.innerHTML = '<h2>' + quizPrompt.question + '</h2>';
    buttonA.innerHTML = quizPrompt.answers[0];
    buttonB.innerHTML = quizPrompt.answers[1];
    buttonC.innerHTML = quizPrompt.answers[2];
    buttonD.innerHTML= quizPrompt.answers[3];
}

function handleUserChoice(button) {
    let userAnswer = button.innerText; 
    if (userAnswer == quizQuestions[firstQuestion].correct) {
        score++;
        rightAnswer();
    } else {
        if (userAnswer != quizQuestions[firstQuestion].correct) {
            wrongAnswer();
        }
    }

    count = 0;
    if (firstQuestion < lastQuestion) {
        firstQuestion++;
        displayQuestion();
    } else {
        clearInterval(timeLeft);
    }
    localStorage.setItem('score', score);
}

function counterUpdate() {
    if(count <= timeLeft) {
        countdownEl.innerHTML = count;
        count++;
    } else {
        count = 0;
        wrongAnswer();

        if (firstQuestion === lastQuestion) {
            clearInterval(timeLeft);
            endQuiz();
        } else {
            if(firstQuestion < lastQuestion) {
                firstQuestion++;
                displayQuestion();
            }
        }        
    }
}

function endQuiz() {
    // countdownEl = "";
    // timeLeft = 0;

    // submitBtn.disabled = false;
    welcomeEl.style.visibility = 'visible';
    welcomeEl.innerHTML = '<h2>' + "You've finished the quiz!" + '</h2>';
    quizEl.style.visibility = 'hidden';
}

submitBtn.addEventListener('click', function() {
    endQuiz();

    var yourName = prompt("Final score: " + localStorage.getItem('score', score) + " out of 4. If you'd like to save your score, enter your name or initials.");

    // var finalTally = localStorage.setItem('finalTally', finalTally);

    localStorage.setItem("yourName", yourName);

    feedbackEl.innerHTML = 'Scores: ' + localStorage.getItem('yourName', yourName)+ ' - ' + localStorage.getItem('score', score); //show high scores in feedback el instead of directing to separate page
});

function rightAnswer() {
    feedbackEl.innerHTML = '<p>' + 'Correct!' + '</p>';
}

function wrongAnswer() {
    feedbackEl.innerHTML = '<p>' + 'Incorrect :(' + '</p>';
    timeLeft -= 15; //penalty for wrong answer
}

function startTimer() {
    const timeInterval = setInterval(function() {
        if(timeLeft > 1) {
            countdownEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft >= 0) {
            countdownEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            countdownEl.textContent = "0 seconds remaining. Time's up!";
            clearInterval(timeLeft);
        }
    }, 1000)
};