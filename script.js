
function getComputerChoice(choice) {
    choice = Math.random();
    let randString = choice.toString();
    if (choice <= .333) {
        randString = "Rock";
    }
    else if (choice <= .666) {
        randString = "Paper"
    }
    else {
        randString = "Scissors"
    }
    
   return randString;
   
}


function getHumanChoice(pick) {

    pick = prompt("Please choose Rock, Paper, or Scissors")
    

    return pick.toUpperCase();

}

function playRound(humanChoice, computerChoice) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
    console.log("Computer's choice: " + computerSelection);
    if ((humanSelection == "ROCK") && (computerSelection == "Paper")) {
        console.log("Human loses, Computer wins!")
        return "computer";
    }
    else if ((humanSelection == "ROCK") && (computerSelection == "Scissors")) {
        console.log("Human wins, Computer loses!")
        return "human"
    }
    else if ((humanSelection == "ROCK") && (computerSelection == "Rock")) {
        console.log("Human and Computer Tie... No points awarded")
    }
    else if ((humanSelection == "PAPER") && (computerSelection == "Paper")) {
        console.log("Human and Computer Tie... No points awarded")
    }
    else if ((humanSelection == "PAPER") && (computerSelection == "Scissors")) {
        console.log("Human loses, Computer wins!")
        return "computer";
    }
    else if ((humanSelection == "PAPER") && (computerSelection == "Rock")) {
        console.log("Human wins, Computer loses!")
        return "human"
    }
    else if ((humanSelection == "SCISSORS") && (computerSelection == "Paper")) {
        console.log("Human wins, Computer loses!")
        return "human"
    }
    else if ((humanSelection == "SCISSORS") && (computerSelection == "Scissors")) {
        console.log("Human and Computer Tie... No points awarded")
    }
    else if ((humanSelection == "SCISSORS") && (computerSelection == "Rock")) {
        console.log("Human loses, Computer wins!")
        return "computer";
    }
    else {
        console.log("Please enter Rock, Paper, or Scissors.")
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    while (humanScore < 5 && computerScore < 5) {
        const roundResult = playRound();

        if (roundResult == "human") {
            humanScore++
        }
        else if (roundResult == "computer") {
            computerScore++

        }

        console.log(`Current Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    }

    if (humanScore === 5) {
        console.log("Human has won the game");
    } else if (computerScore === 5) {
        console.log("Computer has won the game");
    }


    
}