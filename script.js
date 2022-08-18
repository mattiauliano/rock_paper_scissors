let options = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice() {
    let randomSelection = options[Math.floor(Math.random()*options.length)]
    return randomSelection;
}

let computerSelection = getComputerChoice()

function playerSelection() {
    let playerChoice = window.prompt("Choose! Rock, Paper or Scissors?")
}

