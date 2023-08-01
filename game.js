let playerScore = 0;
let computerScore = 0;
let userOption;
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random_choice = choices[Math.floor(Math.random() * choices.length)];
    return random_choice
}

function playRound(playerSelection, computerSelection) {
    let winnerMessage = "";
    if(playerSelection === computerSelection) {
        winnerMessage = "It's a Tie! " + playerSelection + " can't beat " + computerSelection;
    } else if(playerSelection === "rock" && computerSelection === "scissors" || 
              playerSelection === "paper" && computerSelection === "rock" ||
              playerSelection === "scissors" && computerSelection === "paper") {
                playerScore = ++playerScore;
                winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore = ++computerScore;
        winnerMessage = "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    return winnerMessage
}

function game() {
    for(let i = 0; i < 5; i++) {
        userChoice();
        console.log("User points: " + userPoints() + " vs Computer points: " + pcPoints());
    }
    console.log(winner())
}

function userPoints() {
    let userScore = playerScore;
    return userScore;
}

function pcPoints() {
    let aiScore = computerScore;
    return aiScore;
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

function winner() {
    let gameWinner = '';
    if(userPoints() == pcPoints()) {
        gameWinner = "This was a close game. Tie!";
    } else if(userPoints() > pcPoints()) {
        gameWinner = "Congratulations the user wins!";
    } else {
        gameWinner = "Best luck the next time. Computer wins this one!";
    }
    return gameWinner;
}

console.log(game())