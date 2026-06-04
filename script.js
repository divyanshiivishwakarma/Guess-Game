"use strict";
let blank = document.querySelector(".blank");
let check = document.querySelector(".check");
let again = document.querySelector(".again");
let numType = document.querySelector(".numType");
let message = document.querySelector(".msg");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");

let value = Math.trunc(Math.random() * 20) + 1;
let scoreVal = 20;
let highscoreVal = 0;

function win() {
  blank.textContent = value;
  message.textContent = "🎉 Correct Answer";
  document.body.style.backgroundColor = "green";
  numType.style.backgroundColor = "green";
  blank.style.paddingLeft = "1.7em";
  blank.style.paddingRight = "1.7em";
  blank.style.color = "black";
  if (scoreVal > highscoreVal) {
    highscoreVal = scoreVal;
    highscore.textContent = `🏆 Highscore: ${highscoreVal}`;
  }
}

function game() {
  let guess = Number(numType.value);
  if (numType.value === "") {
    message.textContent = "Enter a number";
    if (scoreVal > 1) {
      scoreVal--;
      guess > value
        ? (message.textContent = "📈 Too High ")
        : (message.textContent = "📉 Too Low ");
      score.textContent = `💯 Score: ${scoreVal}`;
    } else {
      message.textContent = " you lost the game";
      score.textContent = `💯 Score: ${scoreVal}`;
    }
    return;
  }
  if (guess < 1 || guess > 20) {
    message.textContent = " Number should be between 1 and 20 ";
    return;
  }
  if (guess !== value) {
    if (scoreVal > 1) {
      scoreVal--;
      guess > value
        ? (message.textContent = "📈 Too High ")
        : (message.textContent = "📉 Too Low ");
      score.textContent = `💯 Score: ${scoreVal}`;
    } else {
      message.textContent = " you lost the game";
      score.textContent = `💯 Score: 0`;
    }
  } else if (guess === value) {
    win();
  }
}

function gameAgn() {
  value = Math.trunc(Math.random() * 20) + 1;
  scoreVal = 20;
  document.body.style.backgroundColor = "black";
  numType.style.backgroundColor = "black";
  blank.style.paddingLeft = "0.7em";
  blank.style.paddingRight = "0.7em";
  blank.style.color = "grey";
  score.textContent = "💯 Score: 20";
  highscore.textContent = `🏆 Highscore: ${highscoreVal}`;
  blank.textContent = "?";
  message.textContent = "Start Guessing...";
  numType.value = "";
  //   game();
}
check.addEventListener("click", game);
again.addEventListener("click", gameAgn);
