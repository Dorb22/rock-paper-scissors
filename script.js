let playerScore = 0;
let computerScore = 0;
let result;
const yourScore = document.querySelector('.your-score');
yourScore.textContent = `Your Score: ${playerScore}`;
const vsScore = document.querySelector('.computer-score')
vsScore.textContent = `Computer Score: ${computerScore}`;
const results = document.querySelector('.results');
const bottom = document.querySelector('.bottom');
const end = document.querySelector('.end');

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
    bottom.appendChild(results);
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        result = `It's a draw! ${playerSelection} vs ${computerSelection}.`;
        results.style.color = 'white';
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        ++playerScore;
        result = 'Paper beats Rock.';
        results.style.color = '#7de6f9';      
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        ++playerScore;
        result = 'Rock beats Scissors.';
        results.style.color = '#7de6f9'; 
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        ++playerScore;
        result = 'Scissors beats Paper.';
        results.style.color = '#7de6f9'; 
    }
    else {
        ++computerScore;
        result = `${computerSelection} beats ${playerSelection}.`;
        results.style.color = '#ffc53a'; 
    }
    results.textContent = result;
    results.style.fontSize = '30px';
    yourScore.textContent = `Your Score: ${playerScore}`;
    vsScore.textContent = `Computer Score: ${computerScore}`;
    showEnd();
}

const rockSymbol = document.querySelector('.rock');
rockSymbol.addEventListener('click', function rock () {
    if(playerScore === 5 || computerScore === 5){
        return;
    }
    playRound('Rock');
    }
);

const paperSymbol = document.querySelector('.paper');
paperSymbol.addEventListener('click', function paper () {
    if(playerScore === 5 || computerScore ===5){
        showEnd();
        return;
    }
    playRound('Paper');
    }
);

const scissorsSymbol = document.querySelector('.scissors');
scissorsSymbol.addEventListener('click', function scissors () {
    if(playerScore === 5 || computerScore ===5){
        showEnd();
        return;
    }
    playRound('Scissors');
    }
);

function showEnd(){
if (playerScore === 5){
    bottom.removeChild(results);
    bottom.appendChild(end);
    end.textContent = 'YOU WIN!';
    end.style.fontSize = '50px';
    end.style.fontWeight = '200px';
    end.style.color = '#09bc8a';
    playAgain();
}
else if (computerScore === 5){
    bottom.removeChild(results);
    bottom.appendChild(end);
    end.textContent = 'YOU LOSE!';
    end.style.fontSize = '50px';
    end.style.color = '#ffc53a';
    playAgain();
}
}

function playAgain(){
    const againButton = document.createElement('button')
    againButton.textContent = 'PLAY AGAIN';
    bottom.appendChild(againButton);
    againButton.style.cssText = 'color:white; font-size: 20px; padding: 12px; background-color:#002726; border-radius: 10px; border-style: none; transition: all 500ms; margin: 5px;'
    againButton.addEventListener('mouseover', () => {
            againButton.style.cssText = 'color:#09bc8a; font-size: 20px; padding: 12px; background-color: white; border-radius: 10px; border-style: none; margin: 5px;'
        }
    ) 
    againButton.addEventListener('mouseout', () => {
        againButton.style.cssText = 'color:white; font-size: 20px; padding: 12px; background-color:#002726; border-radius: 10px; border-style: none; transition: all 500ms; margin: 5px;'
        }
    )
    againButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        yourScore.textContent = `Your Score: ${playerScore}`;
        vsScore.textContent = `Computer Score: ${computerScore}`;
        bottom.removeChild(end);
        bottom.removeChild(againButton);
    }
    )
}









    

