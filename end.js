const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const finalUserName = document.getElementById("finalUserName");
const mostRecentUserName = localStorage.getItem("userName");
const mostRecentScore = localStorage.getItem("score");
const newUserName = username.value;

finalScore.innerText = mostRecentScore;

finalUserName.innerHTML = mostRecentUserName;
function saveUserName() {
  localStorage.setItem(userName, newUserName);
  console.log("click");
}

saveHighScore = (e) => {
  console.log("clicked the save button!");
  e.preventDefault();
};
