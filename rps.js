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
            return 0;
            break;
        case playerSelection == "rock" && computerSelection == "paper":
            outcome.textContent = ("You lost! Paper beats rock");
            return 0;
            break;
        case playerSelection == "rock" && computerSelection == "scissors":
            outcome.textContent = ("You Won! Rock beats scissors");
            return 1;
            break;
        case playerSelection == "paper" && computerSelection == "rock":
            outcome.textContent = ("You Won! Paper beats rock");
            return 1;
            break;
        case playerSelection == "paper" && computerSelection == "paper":
            outcome.textContent = ("It's a tie!");
            return 0;
            break;
        case playerSelection == "paper" && computerSelection == "scissors":
            outcome.textContent = ("You lost! Scissors beat paper");
            return 0;
            break;
        case playerSelection == "scissors" && computerSelection == "rock":
            outcome.textContent = ("You lost! Rock beats scissors");
            return 0;
            break;
        case playerSelection == "scissors" && computerSelection == "paper":
            outcome.textContent = ("You won! Scissors beat paper");
            return 1;
            break;
        case playerSelection == "scissors" && computerSelection == "scissors":
            outcome.textContent = ("It's a tie!");
            return 0;
            break;
    }
}

const btnrock = document.querySelector(".btnrock");
const btnpaper = document.querySelector(".btnpaper");
const btnscissors = document.querySelector(".btnscissors");

btnrock.addEventListener("click", function(event) {
    playRound("rock", computerPlay());
})

btnpaper.addEventListener("click", function(event) {
    playRound("paper", computerPlay());
})

btnscissors.addEventListener("click", function(event) {
    playRound("scissors", computerPlay());
})

// function game() {
//     let score = 0;

//     for(let i = 0; i < 5; i++) {
//         let playerChoice = window.prompt("Enter Rock, Paper, or Scissors: ");
//         let computerChoice = computerPlay();

//         result = playRound(playerChoice, computerChoice);
//         score += result;
//         console.log("Current score: " + score + "\n");
//     }

//     if (score >= 3) {
//         console.log("You won the game!");
//     }
//     else {
//         console.log("You lost the game! get rekt");
//     }
// }

// console.log(game());