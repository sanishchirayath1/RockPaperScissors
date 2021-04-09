function computerPlay() {
  let i = Math.floor(Math.random() * 3);
  let array = ["rock","paper","scissors"]
  return array[i]
}
console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    if (player === computer){
        return "It is a tie" 
    }else if (player === "rock" && computer === "paper"){
        return "Computer Wins, Paper beats Rock"
    }else if (player === "rock" && computer === "scissors"){
        return "You Wins, Rock beats Scissors"
    }
    
    else if (player === "paper" && computer === "rock"){
        return "You Wins, Paper beats rock"
    }else if (player === "paper" && computer === "scissors"){
        return "Computer Wins, Scissors beats Paper"
    }
    
    else if (player === "scissors" && computer === "paper"){
        return "You Wins, Scissors beats Paper"
    }else if (player === "scissors" && computer === "rock"){
        return "computer Wins, Rock beats Scissors"
    }else {
     return  "Check the spelling"
    }
   
  }
  
  const playerSelection = prompt("Rock, Paper, Scissors..What are you?");
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));