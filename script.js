let playerScore;
let computerScore;

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
    const player = prompt ('Type rock, paper or scissors.', 'rock');
    const slicePlayer = player.slice(0,1);
    const sliceRest = player.slice(1);
    playerSelection = slicePlayer.toUpperCase() + sliceRest.toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        console.log(`It's a draw! ${playerSelection} vs ${computerSelection}.`);
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        console.log('You win! Paper beats Rock.');
        ++playerScore;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        console.log('You win! Rock beats Scissors.');
        ++playerScore;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        console.log('You win! Scissors beats Paper.');
        ++playerScore;
    }
    else {
        console.log (`You lose! ${computerSelection} beats ${playerSelection}`);
        ++computerScore;
    }
    ;
}

function game(){
    for (playerScore = 0, computerScore=0; playerScore < 5, computerScore <5;){
        playRound();
        console.log(`Your Score: ${playerScore} Computer Score: ${computerScore}`);
    }
}

game();

    

