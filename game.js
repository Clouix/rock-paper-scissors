function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random_choice = choices[Math.floor(Math.random() * choices.length)];
    return random_choice
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    let winnerMessage = "";
    if(playerSelection === computerSelection) {
        winnerMessage = "It's a Tie! " + playerSelection + " can't beat " + computerSelection
    } else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection
    } else if(playerSelection === "Scrssors" && computerSelection === "Paper") {
        winnerMessage = "You Won! " + playerSelection + " beats " + computerSelection
    } else {
        winnerMessage = "You Lose! " + computerSelection + " beats " + playerSelection
    }

    return winnerMessage
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));