//create container for playButtons
const body = document.body;
const playBox = document.createElement('div');
body.append(playBox);
playBox.setAttribute('style', 'display: flex; justify-content: space-around; align-items: flex-end; height: 400px;');

//create three buttons - one for each selection
const playButton1 = document.createElement('button');
playButton1.textContent = "Rock";
playButton1.setAttribute('style', 'height: 300px; width: 300px; font-size: 75px;');
playBox.appendChild(playButton1);

const playButton2 = document.createElement('button');
playButton2.textContent = "Paper";
playButton2.setAttribute('style', 'height: 300px; width: 300px; font-size: 75px;');
playBox.appendChild(playButton2);

const playButton3 = document.createElement('button');
playButton3.textContent = "Scissors";
playButton3.setAttribute('style', 'height: 300px; width: 300px; font-size: 75px;');
playBox.appendChild(playButton3);

//add event listeners to playButtons
playButton1.addEventListener('click', () => {
    let playerSelection = "rock";
    getComputerChoice();
    playRound(playerSelection, computerSelection);
})

playButton2.addEventListener('click', () => {
    let playerSelection = "paper";
    getComputerChoice();
    playRound(playerSelection, computerSelection);
})

playButton3.addEventListener('click', () => {
    let playerSelection = "scissors";
    getComputerChoice();
    playRound(playerSelection, computerSelection);
})

//create container for point display
const pointBox = document.createElement('div');
body.append(pointBox);
pointBox.setAttribute('style', 'display: flex; justify-content: space-around; margin-top: 150px;');

//create playerPointDisplay
const playerPointDisplay = document.createElement('div');
pointBox.append(playerPointDisplay);
playerPointDisplay.setAttribute('style', 'font-size: 75px;');
let playerPoints = 0;
playerPointDisplay.textContent = `Player: ${playerPoints}`;

//create computerPointDisplay
const computerPointDisplay = document.createElement('div');
pointBox.append(computerPointDisplay);
computerPointDisplay.setAttribute('style', 'font-size: 75px;');
let computerPoints = 0;
computerPointDisplay.textContent = `Computer: ${computerPoints}`;

//create function playRound()
//playRound() will take parameters playerSelection and computerSelection and determine who wins
//playRound() will return strings like "You Lose! Paper beats Rock"
//playRound() will give points to winner after match
function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock") && (playerSelection === "scissors")){
        computerPoints += 1;
        computerPointDisplay.textContent = `Computer: ${computerPoints}`;
        alert("You lose! Rock beats Scissors");
    } else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        playerPoints += 1;
        playerPointDisplay.textContent = `Player: ${playerPoints}`;
        alert("You win! Paper beats Rock");
    } else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        playerPoints += 1;
        playerPointDisplay.textContent = `Player: ${playerPoints}`;
        alert("You win! Rock beats Scissors");
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        computerPoints += 1;
        computerPointDisplay.textContent = `Computer: ${computerPoints}`;
        alert("You lose! Scissors beats Paper");
    } else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        computerPoints += 1;
        computerPointDisplay.textContent = `Computer: ${computerPoints}`;
        alert("You lose! Paper beats Rock");
    } else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        playerPoints += 1;
        playerPointDisplay.textContent = `Player: ${playerPoints}`;
        alert("You win! Scissors beats Paper");
    } else if (computerSelection === playerSelection) {
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        alert(`Nobody wins! ${computerSelection} ties ${computerSelection}`);
    } else {
        alert("error");
    }
    if (playerPoints === 5 || computerPoints === 5) {
        announceWinner();
    }
}

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

//create function announceWinner()
//announceWinner will announce winner
function announceWinner() {
    if (playerPoints === 5) {
        alert('You win!');
    } else if (computerPoints === 5) {
        alert('You lose!');
    } else {
        alert('error');
    }
    playerPoints = 0;
    computerPoints = 0;
    playerPointDisplay.textContent = `Player: ${playerPoints}`;
    computerPointDisplay.textContent = `Computer: ${computerPoints}`;
}