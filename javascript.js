
function getComputerChoice() {

let choices = ['Rock', 'Paper', 'Scissors'];
let choice = choices[Math.floor(Math.random() * choices.length)];
return choice;
}

console.log(getComputerChoice());
