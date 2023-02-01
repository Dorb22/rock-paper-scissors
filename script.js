function getComputerChoice() {
    let com = Math.floor(Math.random() * 3 + 1);
    if (com === 1){
        return 'rock';
    }
    else if (com === 2){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

let player = prompt('Type rock, paper or scissors.', 'rock');
let playerChoice = player.toLowerCase();
if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
    console.log(playerChoice);
}
else {
    console.log ('Please type your answer correctly.');
}
    

