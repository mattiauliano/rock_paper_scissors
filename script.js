const choices = document.querySelectorAll(".choice");
const modalResult = document.getElementById("round-result");
const modal = document.querySelector(".modal");
let playerScoreIncrement = document.getElementById("player-score");
let cpuScoreIncrement = document.getElementById("cpu-score");

// Use an array to avoid bugs with playerScore = 0; and cpuScore = 0;
const scoreboard = {
    player: 0,
    cpu: 0
}

let playerSelection;

// Start a game
function play(e) {
    // Get player selection
    const playerSelection = e.target.id;
    const cpuSelection = getRandomChoice();
    const winner = getWinner(playerSelection, cpuSelection);
    const scoresDisplay = incrementScores(winner, cpuSelection);
    const restart = resetScores(scoreboard);
}

// Get a random CPU selection
function getRandomChoice() {
    const options = ["rock", "paper", "scissors"]
    const cpuSelection = options[Math.floor(Math.random()*options.length)];
    return cpuSelection
}

// Get a winner in a round
function getWinner(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection) {
        return "draw"
    } else if (playerSelection === "rock") {
        if (cpuSelection === "scissors") {
            return "player"
        } else {
            return "cpu"
        }
    } else if (playerSelection === "paper") {
        if (cpuSelection === "rock") {
            return "player"
        } else {
            return "cpu"
        }
    } else if (playerSelection === "scissors") {
        if (cpuSelection === "paper") {
            return "player"
        } else {
            return "cpu"
        }
    }
}

// Scores increase and show the modal
function incrementScores(winner, cpuSelection) {

    //Score increase and add modal texts
    if (winner==="player") {
        scoreboard.player++
        playerScoreIncrement.innerHTML = `<p class="player-score">${scoreboard.player}</p>`;
        modalResult.innerHTML = `
            <h1>You WIN!</h1>
            <i class="choice fas fa-hand-${cpuSelection} fa-10x style="color:#05386b></i>
            <p><strong>CPU Chose ${cpuSelection}</strong></p>
        `;
    } else if (winner==="cpu") {
        scoreboard.cpu++
        cpuScoreIncrement.innerHTML = `<p class="cpu-score">${scoreboard.cpu}</p>`;
        modalResult.innerHTML = `
            <h1>You LOSE!</h1>
            <i class="choice fas fa-hand-${cpuSelection} fa-10x style="color:#05386b></i>
            <p><strong>CPU Chose ${cpuSelection}</strong></p>
        `;
    } else {
        modalResult.innerHTML = `
            <h1>It's a DRAW!</h1>
            <i class="choice fas fa-hand-${cpuSelection} fa-10x style="color:#05386b"></i>
            <p><strong>CPU Chose ${cpuSelection}</strong></p>
        `;
    }

    // Show modal
    modal.style.display = "block";
}

// Reset scores
function resetScores(scoreboard) {
    if ((scoreboard.player==5) || (scoreboard.cpu==5)) {
        cpuScoreIncrement.innerHTML = `<p class="cpu-score">0</p>`;
        playerScoreIncrement.innerHTML = `<p class="player-score">0</p>`;
    }
}

// Clear modal
function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

// Event listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal)