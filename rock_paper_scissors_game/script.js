//variable initialisation
let playerScore = 0;
let computerScore = 0;
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const optionButtons = document.querySelectorAll(".options");



//function to return random option
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomOption = options[Math.floor(Math.random() * options.length)];
  return randomOption;
}

//function to check who win the game
function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else {
    return false;
  }

}


//function to get results
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  let returnMessage = "";
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    returnMessage = `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    returnMessage = `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore += 1;
    returnMessage = `Computer wins! ${computerResult} beats ${userOption}`
  }
  return returnMessage;
}

//function to show results
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  if (computerScore >= 3) {
    winnerMsgElement.innerText = "Computer has won the game!"
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if (playerScore >= 3) {
    winnerMsgElement.innerText = "Player has won the game!"
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

  };

  //function to reset the game
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
  };

  //Listener to get user choice
  optionButtons.forEach(button => {
    button.addEventListener("click", function() {
      const userChoice = button.innerText;
      showResults(userChoice);
    });
  });

  //handling reset button
  resetGameBtn.onclick = resetGame;
