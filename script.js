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
    const playerSelect = player.slice(0,1);
    playerSelection = playerSelect.toUpperCase() + player.slice(1);
    computerSelection = getComputerChoice();
    let winner;
    if (playerSelection === computerSelection){
        console.log(`It's a draw! ${playerSelection} vs ${computerSelection}.`);
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        console.log('You win! Paper beats Rock.');
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        console.log('You win! Rock beats Scissors.');
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        console.log('You win! Scissors beats Paper.');
    }
    else console.log (`You lose! ${computerSelection} beats ${playerSelection}`);
}

playRound();

    

