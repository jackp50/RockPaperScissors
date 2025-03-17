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
    
    console.log(randString);
}


function getHumanChoice(pick) {

    pick = prompt("Please choose Rock, Paper, or Scissors")

    console.log(pick);

}
let humanScore = 0;
let computerScore = 0;

getComputerChoice();
getHumanChoice();