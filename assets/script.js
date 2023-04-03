const timerEl = document.getElementById("timer");
const quizEl = document.getElementById("question");
const choiceEl = document.getElementById("choices");

const button = document.createElement("button");
const para = document.createElement("p");

const welcomeMsg = 
"Welcome to the JavaScript Fundamentals Quiz. For each question, you'll have 10 seconds to choose the correct answer. When you're ready to start, click 'Start Quiz' below. Good luck!" ;

// const questions = 
// ["1. Commonly used data types do NOT include:", "2. String values must be enclosed with ___ when being assigned to variables", "3. The condition in an if/else statement is enclosed by:", "4. An array in JavaScript can be used to store:"];

const q1 = "1. Commonly used data types do NOT include:";
const q2 = "2. String values must be enclosed with ___ when being assigned to variables";
const q3 = "3. The condition in an if/else statement is enclosed by:";
const q4 = "4. An array in JavaScript can be used to store:";

const q1choices = ["A. strings", "B. booleans", "C. alerts"];
const q2choices = ["A. commas ", "B. curly brackets ", "C. quotes"];
const q3choices = ["A. quotes ", "B. curly brackets ", "C. parentheses"];
const q4choices = ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"];

const correct = "Correct";
const incorrect = "Incorrect";

// timer
function timer() {
    const timeLeft = 40;

    //setInterval() calls fxn to execute every 1000 milliseconds
    const timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds left";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second left";
            timeLeft--;
        } else {
            timerEl.textContent = "";
            //clearInterval() to stop timer
            clearInterval(timeInterval);
        }
    }, 1000);
};

function displayQuestion() {
    //display q1 and q1 choices after user clicks start btn
    //display q2 and q2 choices after user answers q1 (clicks one of the btns)
    //display q3 and q3 choices after user answers q2
    //display q4 and q4 choices after user answers q4
    //display quiz done msg and user's score after user answers q4, with option to enter initials and save score, button to go back to start and button to view scores
};

// function displayQuestion() {

//     const questionStart = 0; //start at index 0 of questions array

//     const questionInterval = setInterval(function () {
//         if (questions[questionStart] === undefined) {
//             clearInterval(questionInterval);
//         } else {
//             //iterate through questions array?
//             quizEl.textContent = questions[questionStart];
//             questionStart++;
//         }
//     }, 1000);
// }

//              for (var i = 0; i < questions.length; i++) {
//                  questions[i].textContent = "";                
//                  }

timer();

//start button to start timer
//append question and choices to pg
//advance when user clicks choice
//after last question, user can enter initials and save score
//view high scores