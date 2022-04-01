function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

const resultsContainer = document.querySelector(".results-container");

const youPlayed = document.createElement("p");
resultsContainer.appendChild(youPlayed);

const theyPlayed = document.createElement("p");
resultsContainer.appendChild(theyPlayed);

const outcome = document.createElement("p");
resultsContainer.appendChild(outcome);

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    youPlayed.textContent = "You played " + playerSelection + "!";
    theyPlayed.textContent = "Your opponent played " + computerSelection + "!";

    switch(true) {
        case playerSelection == "rock" && computerSelection == "rock":
            outcome.textContent = ("It's a tie!");
            return "tie";
            break;
        case playerSelection == "rock" && computerSelection == "paper":
            outcome.textContent = ("You lost the round! Paper beats rock");
            return "lose";
            break;
        case playerSelection == "rock" && computerSelection == "scissors":
            outcome.textContent = ("You Won the round! Rock beats scissors");
            return "win";
            break;
        case playerSelection == "paper" && computerSelection == "rock":
            outcome.textContent = ("You Won the round! Paper beats rock");
            return "win";
            break;
        case playerSelection == "paper" && computerSelection == "paper":
            outcome.textContent = ("It's a tie!");
            return "tie";
            break;
        case playerSelection == "paper" && computerSelection == "scissors":
            outcome.textContent = ("You lost the round! Scissors beat paper");
            return "lose";
            break;
        case playerSelection == "scissors" && computerSelection == "rock":
            outcome.textContent = ("You lost the round! Rock beats scissors");
            return "lose";
            break;
        case playerSelection == "scissors" && computerSelection == "paper":
            outcome.textContent = ("You won the round! Scissors beat paper");
            return "win";
            break;
        case playerSelection == "scissors" && computerSelection == "scissors":
            outcome.textContent = ("It's a tie!");
            return "tie";
            break;
    }
}

let playerScore = 0;
let computerScore = 0;

const btnrock = document.querySelector(".btnrock");
const btnpaper = document.querySelector(".btnpaper");
const btnscissors = document.querySelector(".btnscissors");

const scoreContainer = document.querySelector(".score-container");
const playerScoreCounter = document.createElement("p");
scoreContainer.appendChild(playerScoreCounter);
const computerScoreCounter = document.createElement("p");
scoreContainer.appendChild(computerScoreCounter);

function displayResult(result)
{
    if (result == "win") {
        playerScore += 1;
    }
    else if (result == "lose") {
        computerScore += 1;
    }
    playerScoreCounter.textContent = ("Player Score: " + playerScore);
    computerScoreCounter.textContent = ("Computer Score: " + computerScore);
}
btnrock.addEventListener("click", function(event) {
    let result = playRound("rock", computerPlay());
    displayResult(result);
})

btnpaper.addEventListener("click", function(event) {
    let result = playRound("paper", computerPlay());
    displayResult(result);
})

btnscissors.addEventListener("click", function(event) {
    let result = playRound("scissors", computerPlay());
    displayResult(result);
})

const gameOver = document.createElement("p");
scoreContainer.appendChild(gameOver);

if (playerScore == 5 && computerScore < 5) {
    gameOver.textContent = ("YOU WIN!!!");
    
}
else if (computerScore == 5 && playerScore < 5) {
    gameOver.textContent = ("YOU LOSE!!! GET REKT");
}

