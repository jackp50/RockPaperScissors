// Initialize scores
let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.random();
    if (choice <= 0.333) {
        return "Rock";
    } else if (choice <= 0.666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanSelection) {
    const computerSelection = getComputerChoice();
    const resultsDiv = document.getElementById("results");

    // Display computer's choice
    resultsDiv.textContent = `Computer's choice: ${computerSelection}--`;

    // Compare humanSelection and computerSelection to determine the round winner
    if ((humanSelection === "ROCK" && computerSelection === "Paper") ||
        (humanSelection === "PAPER" && computerSelection === "Scissors") ||
        (humanSelection === "SCISSORS" && computerSelection === "Rock")) {
        computerScore++;
        resultsDiv.textContent += ` Computer wins this round!--`;
    } else if (humanSelection === computerSelection.toUpperCase()) {
        resultsDiv.textContent += ` Human and Computer tied!--`;
    } else {
        humanScore++;
        resultsDiv.textContent += ` Human wins this round!--`;
    }

    // Update the score display
    resultsDiv.textContent += ` Current Scores: Human: ${humanScore}, Computer: ${computerScore}`;

    // Check if someone has won the game
    if (humanScore === 5) {
        resultsDiv.textContent = "Congratulations! Human has won the game!--";
        resetGame();
    } else if (computerScore === 5) {
        resultsDiv.textContent = "Game Over! The computer wins the game.--";
        resetGame();
    }
}

function resetGame() {
    // Reset scores and inform the user
    humanScore = 0;
    computerScore = 0;
    document.getElementById("results").textContent += " The game has been reset. ";
}

// Set up the event listeners (called once at the start of the game)
function playGame() {
    document.getElementById("rock").addEventListener("click", () => playRound("ROCK"));
    document.getElementById("paper").addEventListener("click", () => playRound("PAPER"));
    document.getElementById("scissors").addEventListener("click", () => playRound("SCISSORS"));
}

// Start the game
playGame();

