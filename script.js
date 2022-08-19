let cpuScore = 0;
let playerScore = 0;
let playerSelection;
let cpuSelection;

function getRandomChoice() {
    let options = ["rock", "paper", "scissors"]
    cpuSelection = options[Math.floor(Math.random()*options.length)];
    return cpuSelection
}

function getPlayerChoice() {
    const playerChoice = prompt("Choose! Rock, Paper or Scissors?")
    return playerSelection = playerChoice.toLowerCase()
}

function playRound(playerSelection, cpuSelection) {

    getRandomChoice()
    getPlayerChoice()

    if((playerSelection=="rock" && cpuSelection=="scissors") || 
       (playerSelection=="scissors" && cpuSelection=="paper") ||
       (playerSelection=="paper" && cpuSelection=="rock")) {
            alert("You WON!");
            playerScore = ++playerScore
            console.log(playerScore)
    } else if((playerSelection=="rock" && cpuSelection=="paper") || 
              (playerSelection=="scissors" && cpuSelection=="rock") ||
              (playerSelection=="paper" && cpuSelection=="scissors")) {
            alert("You LOST!");
            cpuScore = ++cpuScore
            console.log(cpuScore)
    } else {
        alert("It's TIE!")
    }
}