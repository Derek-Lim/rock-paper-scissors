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

//create function getPlayerChoice()
//getPlayerChoice() will ask user and save the response
function getPlayerChoice() {
    playerSelection = prompt("Rock, scissors, or paper?");
    //make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    //make sure player only selects rock, paper, or scissors
    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = prompt(`"${playerSelection}" is not valid. Please pick again.`);
        //make playerSelection case-insensitive
        playerSelection = playerSelection.toLowerCase();
    }
    return playerSelection;
}

//create function playRound()
//playRound() will take parameters playerSelection and computerSelection and determine who wins
//playRound() will return strings like "You Lose! Paper beats Rock"
//playRound() will give points to winner after match
let computerPoints = 0;
let playerPoints = 0;
function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock") && (playerSelection === "scissors")){
        alert("You lose! Rock beats Scissors");
        computerPoints += 1;
        return computerPoints;
    } else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        alert("You win! Paper beats Rock");
        playerPoints += 1;
        return playerPoints;
    } else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        alert("You win! Rock beats Scissors");
        playerPoints += 1;
        return playerPoints;
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        alert("You lose! Scissors beats Paper");
        computerPoints += 1;
        return computerPoints;
    } else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        alert("You lose! Paper beats Rock");
        computerPoints += 1;
        return computerPoints;
    } else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        alert("You win! Scissors beats Paper");
        playerPoints += 1;
        return playerPoints;
    } else if (computerSelection === playerSelection) {
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        alert(`Nobody wins! ${computerSelection} ties ${computerSelection}`);   
    } else {
        alert("error")
    }
}

//create function game()
//game() will allow user to play 5 rounds against computer
//game() will track score
//game() will announce winner
function game() {
    getComputerChoice();
    getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round 1\nComputer: ${computerPoints}\nYou: ${playerPoints}`);

    getComputerChoice();
    getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round 2\nComputer: ${computerPoints}\nYou: ${playerPoints}`);

    getComputerChoice();
    getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round 3\nComputer: ${computerPoints}\nYou: ${playerPoints}`);

    getComputerChoice();
    getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round 4\nComputer: ${computerPoints}\nYou: ${playerPoints}`);

    getComputerChoice();
    getPlayerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round 5\nComputer: ${computerPoints}\nYou: ${playerPoints}`);
}

//play
game();