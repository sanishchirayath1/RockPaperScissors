function computerPlay() {
  let i = Math.floor(Math.random() * 3);
  let array = ["rock","paper","scissors"]
  return array[i]
}
let playerScore = 0;
let computerScore = 0;

function playRound() {

 const playerSelection = prompt("Rock, Paper, Scissors..What is your choice?");
 const computerSelection = computerPlay();


    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    
   
    
    
    if (player === computer){
        playerScore += 0.5;
        computerScore += 0.5;
         return "It is a tie"
    }

    else if (player === "rock" && computer === "paper"){  
        computerScore += 1;
        return "You loses, Paper beats Rock"

    }
    
    else if (player === "rock" && computer === "scissors"){
        playerScore += 1;
        return "You Wins, Rock beats Scissors"
    }
    
    else if (player === "paper" && computer === "rock"){
        playerScore += 1;
        return "You Wins, Paper beats rock"
    }

    else if (player === "paper" && computer === "scissors"){
        computerScore += 1
        return "You loses, Scissors beats Paper"
    }
    
    else if (player === "scissors" && computer === "paper"){
        playerScore += 1;
        return "You Wins, Scissors beats Paper"
    }
    
    else if (player === "scissors" && computer === "rock"){
        computerScore += 1
        return "You loses, Rock beats Scissors"

    }else {
     return  "Check the spelling"
    }

  }

  
  

  function game() {

    
        for (let i = 0; i < 5; i++) {
            console.log(playRound());

        }
        console.log("you :" ,playerScore ," | computer :", computerScore);
            if (playerScore > computerScore) {
                console.log("%cYou Won the game","color:green;font-size: 40px");
            }       
            else if(playerScore < computerScore){
                console.log("%cYou lose the game","color:red;font-size: 40px");
            }else{
                console.log("%cYou've drawn the game","color:orange;font-size: 40px");
            }
           
    playerScore = 0;
    computerScore = 0;
      
  } game()