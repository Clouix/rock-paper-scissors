function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random_choice = choices[Math.floor(Math.random() * choices.length)];
    return random_choice
}

console.log(getComputerChoice())