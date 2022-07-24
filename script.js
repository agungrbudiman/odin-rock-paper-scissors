function getComputerChoice() {
    generatedNum = Math.floor(Math.random() * 3);
    switch(generatedNum) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'draw';
    }
    if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        return 'win';
    }
    if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        return 'win';
    }
    if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        return 'win';
    }
    return 'lose';
}

let playerScore = 0;
let computerScore = 0;
const playerScoreBox = document.querySelector(".player .score");
const computerScoreBox = document.querySelector(".computer .score");

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreBox.textContent = '0';
    computerScoreBox.textContent = '0';
}

function play(e) {
    e.target.classList.add('selected');
    const playerSelection = e.target.getAttribute('value');
    const computerSelection = getComputerChoice();
    const computerBox = document.querySelector(`.computer .box[value="${computerSelection}"]`);
    computerBox.classList.add('selected');
    const status = playRound(playerSelection, computerSelection);
    if (status == 'win') {
        playerScore ++;
        playerScoreBox.textContent = playerScore;
    }
    else if (status == 'lose') {
        computerScore ++;
        computerScoreBox.textContent = computerScore;
    }
    if (playerScore == 5) {
        alert("You are the Winner, Congratulations!!!");
        reset();
    }
    else if (computerScore == 5) {
        alert("You lose, better luck next time!!!");
        reset();
    }
}

const playerBoxes = document.querySelectorAll(".player .box");
playerBoxes.forEach(box => {
    box.addEventListener('click', play);
});

document.addEventListener('transitionend', (e) => {
    e.target.classList.remove('selected');
})
