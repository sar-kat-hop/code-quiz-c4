const questions = [
    { 
        question: "Commonly used data types do NOT include:",
        choiceA: 'Strings',
        choiceB: 'Booleans',
        choiceC: 'Alerts',
        correct: 'Alerts'
        // choices: ["A. strings", "B. booleans", "C. alerts"],
    },
    {
        question: "String values must be enclosed with ___ when being assigned to variables",
        // choices: ["A. commas ", "B. curly brackets ", "C. quotes"],
        choiceA: 'Commas ,',
        choiceB: 'Curly brackets {} ',
        choiceC: 'Quotes "" ',
        correct: "Quotes"
    },
    {
        question: "The condition in an if/else statement is enclosed by:",
        // choices: ["A. quotes ", "B. curly brackets ", "C. parentheses"],
        choiceA: 'Quotes ""',
        choiceB: 'Curly brackets {}',
        choiceC: 'Parentheses ()',
        correct: "Parentheses"
    },
    {
        question: "An array in JavaScript can be used to store:",
        // choices: ["A. numbers and strings", "B. other arrays", "C. booleans", "D. all of the above"],
        choiceA: 'Numbers and strings',
        choiceB: 'Other arrays',
        choiceC: 'Booleans',
        choiceD: 'All of the above',
        correct: "All of the above"
    }
];

let questionStart = 0;
let questionEnd = questions.length -1; 
let count = 0;
let score = 0;

const introEl = document.getElementById('intro');
const welcomeMsg = document.getElementById('welcome-msg');
const startBtn = document.getElementById("start-btn");
const timerEl = document.getElementById("timer");
const quizEl = document.getElementById("question");
const choiceEl = document.getElementById("choices");
const choiceLi = document.getElementsByClassName('choice');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');
const choiceC = document.getElementById('choiceC');
const choiceD = document.getElementById('choiceD');
const answerCheckEl = document.getElementById('rightWrong');
const scoreEl = document.getElementById('score');

// const newBtn = document.createElement("button");
// const newPara = document.createElement("p");

function showQuestion() {
    let question = questions[questionStart];
    quizEl.innerHTML = '<div><h2>' + question.question + '</h2></div>';
    // choiceEl.innerHTML = '<div><p>' + question.choices;
    choiceA.innerText = question.choiceA;
    choiceB.textContent = question.choiceB;
    choiceC.textContent = question.choiceC;
    choiceD.textcontent = question.choiceD;
};

// function showChoices() {
//     choiceLi.style.visibility = 'visible';
//     choiceLi.setAttribute('visibility', 'visible');
// };

// timer
function timer() {
    const timeLeft = 60;

    //setInterval() calls fxn to execute every 1000 milliseconds
    const timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds left";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second left";
            timeLeft--;
        } else {
            timerEl.textContent = "Out of time";
            //clearInterval() to stop timer
            clearInterval(timeInterval);
        }
    }, 1000);
};

// function counter() {
//     if (count <= timeLeft) {
//         timerEl.innerHTML = count;
//         count++;
//     } else {
//         count = 0;
//         wrongAnswer();

//         if(questionStart < questionEnd) {
//             questionStart++;
//             showQuestion();
//         } else {
//             clearInterval(timerEl);
//         }
//     }
// };

// only start quiz and timer on button click
startBtn.addEventListener('click', function() {
    welcomeMsg.innerHTML = ''; 
    timer();
    startQuiz();
});

function startQuiz() {
    startBtn.style.visibility = 'hidden';
    showQuestion();
    // showChoices();
};

choiceEl.addEventListener('click', function() {
    checkAnswer();
});

function checkAnswer(answer) {
    if (answer === questions[questionStart].correct) {
        score++;
        correctAnswer();
    } else {
        wrongAnswer();
    }

    count = 0;
    if(questionStart < questionEnd ) {
        questionStart++;
        showQuestion();
    } else {
        clearInterval(timeLeft);
    }
    localStorage.setItem('score', score);
    scoreEl.innerHTML = 'Your score: ' + score;
};

function correctAnswer() {
    answerCheckEl.innerHTML = 'Correct!';
    score++;
};

function wrongAnswer() {
    answer.innerHTML = 'Sorry, wrong answer!';
    // timeLeft -= 15; //time penalty
    // showQuestion();
};

// append button with answer choices text to choiceEl and assign id
// function answerBtn(text, id){
//     newBtn.textContent = text;
//     newBtn.setAttribute("id", id);
// };

// function displayQuestion(questionStart) {
//     const choices = questions[questionStart].choices;
//     const listItem = document.createElement("li");

//     quizEl.textContent = questions[questionStart].question;
    
//     for (var i = 0; i < questions.length;) {
//         questions[i].textContent = questions.question;   
//         quizEl.appendChild(choiceEl);
//     };
    
//     let i = 1;
//         choices.forEach(function(choice) {
//             choiceEl.appendChild(listItem); 
//                 listItem.appendChild(answerBtn(i + ") " + choice + "liBtn"))

//             listItem.addEventListener("click", (ansEval));

//             i++;
//         });
//     };

// function ansEval(event) {
//     // listen for button click
//     // check if correct answer chosen
//     const ansBtn = event.target;

//     if (ansBtn.textContent == (questions[i].answer)) {
//         choiceEl.appendChild(newPara);
//         newPara.textContent = correct;
//     } else {
//         choiceEl.appendChild(newPara);
//         newPara.textContent = incorrect;
//     }

//     questionStart++; //advance to next question regardless of result
// }

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