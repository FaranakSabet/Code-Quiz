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
  if (answer === questionList[questionCounter].answer) {
    console.log("correct");
    questionCounter++;
    score += 100;
    updateScore();
    switch (answer) {
      case 1:
        choice1.style.backgroundColor = "green";
        break;
      case 2:
        choice2.style.backgroundColor = "green";
        break;
      case 3:
        choice3.style.backgroundColor = "green";
        break;
      case 4:
        choice4.style.backgroundColor = "green";
        break;
    }
    window.setTimeout(() => {
      resetColors();
      displayQuestions();
    }, 2000);
  } else {
    console.log("incorrect");
    let choice = `choice${answer}`;
    switch (answer) {
      case 1:
        choice1.style.backgroundColor = "red";
        break;
      case 2:
        choice2.style.backgroundColor = "red";
        break;
      case 3:
        choice3.style.backgroundColor = "red";
        break;
      case 4:
        choice4.style.backgroundColor = "red";
        break;
    }
  }
}

function updateScore() {
  score.innerHTML = score;
}

function displayQuestions() {
  question.innerHTML = questionList[questionCounter].question;
  choice1.innerHTML = questionList[questionCounter].choice1;
  choice2.innerHTML = questionList[questionCounter].choice2;
  choice3.innerHTML = questionList[questionCounter].choice3;
  choice4.innerHTML = questionList[questionCounter].choice4;
}

function resetColors() {
  choice1.style.backgroundColor = "white";
  choice2.style.backgroundColor = "white";
  choice3.style.backgroundColor = "white";
  choice4.style.backgroundColor = "white";
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
