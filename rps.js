function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

let playerScore = 0;
let computerScore = 0;

const resultsContainer = document.querySelector(".results-container");

const youPlayed = document.createElement("p");
resultsContainer.appendChild(youPlayed);

const theyPlayed = document.createElement("p");
resultsContainer.appendChild(theyPlayed);

const outcome = document.createElement("p");
resultsContainer.appendChild(outcome);

function playRound(playerSelection, computerSelection) {
    youPlayed.textContent = "You played " + playerSelection + "!";
    theyPlayed.textContent = "Your opponent played " + computerSelection + "!";

    switch(true) {
        case playerSelection == "rock" && computerSelection == "rock":
            outcome.textContent = ("It's a tie!");
            break;
        case playerSelection == "rock" && computerSelection == "paper":
            outcome.textContent = ("You lost the round! Paper beats rock");
            computerScore++;
            break;
        case playerSelection == "rock" && computerSelection == "scissors":
            outcome.textContent = ("You Won the round! Rock beats scissors");
            playerScore++;
            break;
        case playerSelection == "paper" && computerSelection == "rock":
            outcome.textContent = ("You Won the round! Paper beats rock");
            playerScore++;
            break;
        case playerSelection == "paper" && computerSelection == "paper":
            outcome.textContent = ("It's a tie!");
            break;
        case playerSelection == "paper" && computerSelection == "scissors":
            outcome.textContent = ("You lost the round! Scissors beat paper");
            computerScore++;
            break;
        case playerSelection == "scissors" && computerSelection == "rock":
            outcome.textContent = ("You lost the round! Rock beats scissors");
            computerScore++;
            break;
        case playerSelection == "scissors" && computerSelection == "paper":
            outcome.textContent = ("You won the round! Scissors beat paper");
            playerScore++;
            break;
        case playerSelection == "scissors" && computerSelection == "scissors":
            outcome.textContent = ("It's a tie!");
            break;
    }
}


const btnrock = document.querySelector(".btnrock");
const btnpaper = document.querySelector(".btnpaper");
const btnscissors = document.querySelector(".btnscissors");

const scoreContainer = document.querySelector(".score-container");

const playerScoreCounter = document.createElement("p");
scoreContainer.appendChild(playerScoreCounter);

const computerScoreCounter = document.createElement("p");
scoreContainer.appendChild(computerScoreCounter);

const gameOver = document.createElement("p");
scoreContainer.appendChild(gameOver);

function displayGameOver(){
    playerScoreCounter.textContent = ("Player Score: " + playerScore);
    computerScoreCounter.textContent = ("Computer Score: " + computerScore);
    if (playerScore == 5 && computerScore < 5) {
        gameOver.textContent = ("YOU WIN!!!");  
    }
    else if (computerScore == 5 && playerScore < 5) {
        gameOver.textContent = ("YOU LOSE!!! GET REKT");
    }
}

btnrock.addEventListener("click", function(event) {
    playRound("rock", computerPlay());
    displayGameOver();
})

btnpaper.addEventListener("click", function(event) {
    playRound("paper", computerPlay());
    displayGameOver();
})

btnscissors.addEventListener("click", function(event) {
    playRound("scissors", computerPlay());
    displayGameOver();
})