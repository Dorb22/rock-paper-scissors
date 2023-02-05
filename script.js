let playerScore = 0;
let computerScore = 0;
let result;
let resultSentence;

function getComputerChoice() {
    const com = Math.floor(Math.random() * 3 + 1);
    if (com === 1){
        return 'Rock';
    }
    else if (com === 2){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound (playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        result = `It's a draw! ${playerSelection} vs ${computerSelection}.`;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        ++playerScore;
        result = 'You win! Paper beats Rock.';      
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        ++playerScore;
        result = 'You win! Rock beats Scissors.';
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        ++playerScore;
        result = 'You win! Scissors beats Paper.';
    }
    else {
        ++computerScore;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function showResult(){
    const results = document.querySelector('.results');
    results.textContent = result;
}

function showScoreBoard() {
    const scoreboard = document.querySelector('.scoreboard');
    scoreboard.textContent = `Your Score: ${playerScore}  Computer Score: ${computerScore}`  ;
}


const rock = document.querySelector('.rock');
rock.addEventListener('click', function rock () {
    if(playerScore === 5 || computerScore ===5){
        return;
    }
    playRound('Rock');
    showResult();
    showScoreBoard();
    }
);

const paper = document.querySelector('.paper');
paper.addEventListener('click', function paper () {
    if(playerScore === 5 || computerScore ===5){
        return;
    }
    playRound('Paper');
    showResult();
    showScoreBoard();
    }
);

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function scissors () {
    if(playerScore === 5 || computerScore ===5){
        return;
    }
    playRound('Scissors');
    showResult();
    showScoreBoard();
    }
);








    

