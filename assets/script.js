
const welcomeMsg = 
"Welcome to the JavaScript Fundamentals Quiz. For each question, you'll have 10 seconds to choose the correct answer. When you're ready to start, click 'Start Quiz' below. Good luck!" ;

const questions = [
    { 
        question: "Commonly used data types do NOT include:",
        choices: ["A. strings", "B. booleans", "C. alerts"],
        answer: "alerts"
        
    },
    {
        question: "String values must be enclosed with ___ when being assigned to variables",
        choices: ["A. commas ", "B. curly brackets ", "C. quotes"],
        answer: "quotes"
    },
    {
        question: "The condition in an if/else statement is enclosed by:",
        choices: ["A. quotes ", "B. curly brackets ", "C. parentheses"],
        answer: "parentheses"
    },
    {
        question: "An array in JavaScript can be used to store:",
        choices: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
        answer: "all of the above"
    }
];

const correct = "Correct";
const incorrect = "Incorrect";

const questionStart = 0;

const timerEl = document.getElementById("timer");
const quizEl = document.getElementById("question");
const choiceEl = document.getElementById("choices");

const newBtn = document.createElement("button");
const newPara = document.createElement("p");

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

// append button with answer choices text to choiceEl and assign id
function answerBtn(text, id){
    newBtn.textContent = text;
    newBtn.setAttribute("id", id);
};

function displayQuestion(questionStart) {
    const choices = questions[questionStart].choices;
    const listItem = document.createElement("li");

    quizEl.textContent = questions[questionStart].question;
    
    for (var i = 0; i < questions.length;) {
        questions[i].textContent = questions.question;   
        quizEl.appendChild(choiceEl);
    };
    
    let i = 1;
        choices.forEach(function(choice) {
            choiceEl.appendChild(listItem); 
                listItem.appendChild(answerBtn(i + ") " + choice + "liBtn"))

            listItem.addEventListener("click", (ansEval));

            i++;
        });
    };

function ansEval(event) {
    // listen for button click
    // check if correct answer chosen
    const ansBtn = event.target;

    if (ansBtn.textContent == (questions[i].answer)) {
        choiceEl.appendChild(newPara);
        newPara.textContent = correct;
    } else {
        choiceEl.appendChild(newPara);
        newPara.textContent = incorrect;
    }

    questionStart++; //advance to next question regardless of result
}

    //display quiz done msg and user's score after user answers q4, with option to enter initials and save score, button to go back to start and button to view scores

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

// function highScores() {
    // const newH1 = document.createElement("h1");

    //  quizEl.innerHTML = " "; 
    // timerEl.textContent = " ";

    // quizEl.appendChild(newH1("High Scores:"));
// };

// TODO: write fxn to calculate and record score

//start button to start timer
//append question and choices to pg
//advance when user clicks choice
//after last question, user can enter initials and save score
//view high scores