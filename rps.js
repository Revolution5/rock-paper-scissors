function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}



function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    console.log("You played " + playerSelection + "!");
    console.log("Your opponent played " + computerSelection + "!");

    switch(true) {
        case playerSelection == "rock" && computerSelection == "rock":
            console.log("It's a tie!");
            return 0;
            break;
        case playerSelection == "rock" && computerSelection == "paper":
            console.log("You lost! Paper beats rock");
            return 0;
            break;
        case playerSelection == "rock" && computerSelection == "scissors":
            console.log("You Won! Rock beats scissors");
            return 1;
            break;
        case playerSelection == "paper" && computerSelection == "rock":
            console.log("You Won! Paper beats rock");
            return 1;
            break;
        case playerSelection == "paper" && computerSelection == "paper":
            console.log("It's a tie!");
            return 0;
            break;
        case playerSelection == "paper" && computerSelection == "scissors":
            console.log("You lost! Scissors beat paper");
            return 0;
            break;
        case playerSelection == "scissors" && computerSelection == "rock":
            console.log("You lost! Rock beats scissors");
            return 0;
            break;
        case playerSelection == "scissors" && computerSelection == "paper":
            console.log("You won! Scissors beat paper");
            return 1;
            break;
        case playerSelection == "scissors" && computerSelection == "scissors":
            console.log("It's a tie!");
            return 0;
            break;
    }
}

function game() {
    let score = 0;

    for(let i = 0; i < 5; i++) {
        let playerChoice = window.prompt("Enter Rock, Paper, or Scissors: ");
        let computerChoice = computerPlay();

        result = playRound(playerChoice, computerChoice);
        score += result;
        console.log("Current score: " + score + "\n");
    }

    if (score >= 3) {
        console.log("You won the game!");
    }
    else {
        console.log("You lost the game! get rekt");
    }
}

console.log(game());