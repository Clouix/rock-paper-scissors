function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random_choice = choices[Math.floor(Math.random() * choices.length)];
    return random_choice
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    let winnerMessage = "";
    if(playerSelection === computerSelection) {
        winnerMessage = "It's a Tie! " + playerSelection + " can't beat " + computerSelection;
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection;
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection;
    } else {
        winnerMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    return winnerMessage
}

    let palyerScore;
    let computerScore;
    let userOption;
    const computerSelection = getComputerChoice();

function game() {
    
    
    for(let i = 0; i < 5; i++) {
        
        userChoice();
    }
}

function userChoice() {
    userOption = prompt("Choose between: rock, paper or scissors!");
    userOption = userOption.toLowerCase();
    if(userOption == 'rock' || userOption == 'paper' || userOption == 'scissors') {
        console.log(playRound(userOption, computerSelection));
    } else {
        alert('Invalid choice, write a valid one');
        userChoice();
    }
}

console.log(game())