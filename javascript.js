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
        return "This round is a tie!";
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "You lose this round"
    }
}

for (let i = 1; i <= 5; i++){
    userChoice = prompt("Choose: Rock, Paper, or Scissors;");
    const playerSelection = userChoice;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Player points: ", playerScore, "Computer points: ", computerScore);
}

if (playerScore == computerScore) {
    alert("Tie game!")
} else if (playerScore > computerScore) {
    alert("Player won this game!")
} else {
    alert("Computer won this game")
}



//decline unfit words
//keep scores
//make case insensitive
//reset score after 5
