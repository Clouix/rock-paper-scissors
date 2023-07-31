function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random_choice = choices[Math.floor(Math.random() * choices.length)];
    return random_choice
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    let winnerMessage = "";
    if(playerSelection === computerSelection) {
        winnerMessage = "It's a Tie! " + playerSelection + " can't beat " + computerSelection
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection
    } else {
        winnerMessage = "You Lose! " + computerSelection + " beats " + playerSelection
    }

    return winnerMessage
}

let playerSelection = "RoCK";
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));