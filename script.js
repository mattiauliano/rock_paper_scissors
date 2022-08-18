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

