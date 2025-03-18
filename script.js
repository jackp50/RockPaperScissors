console.log("Hello World");

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
    if ((humanSelection == "ROCK") && (computerSelection == "Paper")) {
        computerScore++
        console.log("Human loses, Computer wins!")
    }
    else if ((humanSelection == "ROCK") && (computerSelection == "Scissors")) {
        humanScore++
        console.log("Human wins, Computer loses!")
    }
    else if ((humanSelection == "ROCK") && (computerSelection == "Rock")) {
        console.log("Human and Computer Tie... No points awarded")
    }
    else if ((humanSelection == "PAPER") && (computerSelection == "Paper")) {
        console.log("Human and Computer Tie... No points awarded")
    }
    else if ((humanSelection == "PAPER") && (computerSelection == "Scissors")) {
        computerScore++
        console.log("Human loses, Computer wins!")
    }
    else if ((humanSelection == "PAPER") && (computerSelection == "Rock")) {
        humanScore++
        console.log("Human wins, Computer loses!")
    }
    else if ((humanSelection == "SCISSORS") && (computerSelection == "Paper")) {
        humanScore++
        console.log("Human wins, Computer loses!")
    }
    else if ((humanSelection == "SCISSORS") && (computerSelection == "Scissors")) {
        console.log("Human and Computer Tie... No points awarded")
    }
    else if ((humanSelection == "SCISSORS") && (computerSelection == "Rock")) {
        computerScore++
        console.log("Human loses, Computer wins!")
    }
    else {
        console.log("Please enter Rock, Paper, or Scissors.")
    }
}
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log("Computer's choice: " + computerSelection);
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
