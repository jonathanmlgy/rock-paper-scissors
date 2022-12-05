let userChoice;
let playerScore = 0;
let computerScore = 0;


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
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You loss!"
    }
}


const computerSelection = getComputerChoice();

for (let i = 0; i <= 5; i++){
    userChoice = prompt("Choose: Rock, Paper, or Scissors;");
    const playerSelection = userChoice;
    console.log(playRound(playerSelection, computerSelection));
    
}



//decline unfit words
//keep scores
//make case insensitive
//reset score after 5
