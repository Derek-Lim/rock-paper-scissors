//create function getComputerChoice()
//getComputerChoice() will randomly select rock, scissors, or paper
function getComputerChoice() {
    min = Math.ceil(1);
    max = Math.floor(4);
    computerSelection = Math.floor(Math.random() * (max - min) + min);
    if (computerSelection === 1) {
        computerSelection = "rock";
    } else if (computerSelection === 2) {
        computerSelection = "scissors";
    } else {
        computerSelection = "paper";
    }
    return computerSelection;
}
console.log(getComputerChoice());

//create function getPlayerChoice()
//getPlayerChoice() will ask user and save the response
function getPlayerChoice() {
    playerSelection = prompt("Rock, scissors, or paper?");
    return playerSelection;
}

console.log(getPlayerChoice());