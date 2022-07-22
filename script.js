function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    generatedNum = Math.floor(Math.random() * 3);
    switch(generatedNum) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice')
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 'win':
                playerScore++;
                console.log(`Round-${i+1} | You Win!, ${playerSelection} beats ${computerSelection}`);
                break;
            case 'lose':
                computerScore++;
                console.log(`Round-${i+1} | You Lose!, ${computerSelection} beats ${playerSelection}`);
                break;
            case 'draw':
                console.log(`Round-${i+1} | Draw!, ${playerSelection} vs ${computerSelection}`);
                break;
        }
    }
    if (playerScore == computerScore) {
        console.log('Result: Draw!');
    }
    else if (playerScore > computerScore) {
        console.log('Result: You are the winner!');
    }
    else {
        console.log('Result: Computer is the winner!');
    }
}

game();