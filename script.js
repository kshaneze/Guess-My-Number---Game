'use strict';
const body = document.querySelector('body');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const buttonCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreMessage = document.querySelector('.label-score');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

// Generate random number between 1 and 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let currentHightScore = score.textContent;

buttonCheck.addEventListener('click', function (e) {
  e.preventDefault();

  // Condition that I use to check is there any input, if there is, everthing below should run
  if (guessInput.value) {
    // If the random genereated Int is < then our input
    if (randomNumber < guessInput.value) {
      // Display message, number is too high
      message.textContent = 'Too high!';
      // Update High score
    }

    // If the random genereated Int is >  then our input
    if (randomNumber > guessInput.value) {
      // Display message, number is too low
      message.textContent = 'Too low!';
      // Update High score
    }
    // Update score
    // And determen that value cant go below 0
    if (!Number(score.textContent) <= 0) {
      randomNumber < guessInput.value || randomNumber > guessInput.value;
      score.textContent--;
    } else {
      score.textContent = 0;
    }
    // Check if random genereated Int is equal (win) to my input
    if (randomNumber == guessInput.value) {
      // Display hidden number
      number.textContent = randomNumber;
      // Change bacground color to green
      body.style.backgroundColor = '#60b347';
      // Resize box to be bigger
      number.style.width = '30rem';
      // Update message you won
      message.textContent = 'Correct Number!!';
      // Update high score but only if score is higher then current high score
      if (score.textContent > highscore.textContent)
        highscore.textContent = score.textContent;
    }
  } else {
    // if there isnt any input , message no input should run
    message.textContent = 'No input !!!';
  }
});

// Attach click event to button and implement restart function for the game
again.addEventListener('click', function () {
  // Return all starting positions
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  // Secret number hidden
  number.textContent = '?';
  // Background color to gray
  body.style.backgroundColor = '#222';
  // Restart starting message
  message.textContent = 'Start guessing...';
  // Restart score
  score.textContent = 20;
  // Clear input value
  guessInput.value = '';
  // Resize box back to normal width
  number.style.width = '15rem';
  // High score should stay the same
});
