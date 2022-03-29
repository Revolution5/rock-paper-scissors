function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

let playerChoice = window.prompt("Enter Rock, Paper, or Scissors: ");
let computerChoice = computerPlay();

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    console.log("You played " + playerSelection + "!");
    console.log("Your opponent played " + computerSelection + "!");

    switch(true) {
        case playerSelection == "rock" && computerSelection == "rock":
            return "It's a tie!";
            break;
        case playerSelection == "rock" && computerSelection == "paper":
            return "You lost! Paper beats rock";
            break;
        case playerSelection == "rock" && computerSelection == "scissors":
            return "You Won! Rock beats scissors";
            break;
        case playerSelection == "paper" && computerSelection == "rock":
            return "You Won! Paper beats rock";
            break;
        case playerSelection == "paper" && computerSelection == "paper":
            return "It's a tie!";
            break;
        case playerSelection == "paper" && computerSelection == "scissors":
            return "You lost! Scissors beat paper";
            break;
        case playerSelection == "scissors" && computerSelection == "rock":
            return "You lost! Rock beats scissors";
            break;
        case playerSelection == "scissors" && computerSelection == "paper":
            return "You won! Scissors beat paper";
            break;
        case playerSelection == "scissors" && computerSelection == "scissors":
            return "It's a tie!";
            break;
    }
}
console.log(playRound(playerChoice, computerChoice))