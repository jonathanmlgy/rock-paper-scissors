let userChoice = prompt("Choose: Rock, Paper, or Scissors;")

function getComputerChoice() {
let choices = ['rock', 'paper', 'scissors'];
let choice = choices[Math.floor(Math.random() * choices.length)];
return choice;
}




function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        return "You win!";
    } else {
        return "You loss!"
    }
}

const playerSelection = userChoice;
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
