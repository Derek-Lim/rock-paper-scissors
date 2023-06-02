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
    //make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    //make sure player only selects rock, paper, or scissors
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt(`"${playerSelection}" is not valid. Please pick again.`);
    }
    return playerSelection;
}
console.log(getPlayerChoice());

//create function playRound()
//playRound() will take parameters playerSelection and computerSelection and determine who wins
//playRound() will return strings like "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock") && (playerSelection === "scissors")){
        alert("You lose! Rock beats Scissors");
    } else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        alert("You win! Paper beats Rock");
    } else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        alert("You win! Rock beats Scissors");
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        alert("You lose! Scissors beats Paper");
    } else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        alert("You lose! Paper beats Rock");
    } else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        alert("You win! Scissors beats Paper");
    } else if (computerSelection === playerSelection) {
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        alert(`Nobody wins! ${computerSelection} ties ${computerSelection}`);   
    } else {
        alert("error")
    }
}
playRound(playerSelection, computerSelection);