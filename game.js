const question = document.getElementById("question");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questionList = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "&lt script &gt",
    choice2: "&lt javascript &gt",
    choice3: "&lt js &gt",
    choice4: "&lt scripting &gt",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: " &lt script href='xxx.js' &gt",
    choice2: " &lt script name='xxx.js' &gt",
    choice3: " &lt script src='xxx.js' &gt",
    choice4: " &lt script file='xxx.js' &gt",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
];

function compChoice(answer) {
  if (answer === questionList[0].answer) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
}

function displayQuestions() {
  question.innerHTML = questionList[questionCounter].question;
  choice1.innerHTML = questionList[0].choice1;
  choice2.innerHTML = questionList[0].choice2;
  choice3.innerHTML = questionList[0].choice3;
  choice4.innerHTML = questionList[0].choice4;
}

function main() {
  displayQuestions();
  choice1.addEventListener("click", () => {
    compChoice(1);
  });
  choice2.addEventListener("click", () => {
    compChoice(2);
  });
  choice3.addEventListener("click", () => {
    compChoice(3);
  });
  choice4.addEventListener("click", () => {
    compChoice(4);
  });
}

main();
