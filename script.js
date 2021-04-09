function computerPlay() {
  let i = Math.floor(Math.random() * 3);
  let array = ["rock","paper","scissors"]
  return array[i]
}
let playerScore = 0;
let computerScore = 0;

function playRound() {

 const playerSelection = window.prompt("Rock, Paper, Scissors..What is your choice?");
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
    //another trial if spelling is wrong
       playRound()
    
    }

  }

  
  

  function game() {

    
        for (let i = 0; i < 5; i++) {
            console.log(playRound());
            window.alert("your score : " + playerScore + "  computer score : " + computerScore);
        }
        
            if (playerScore > computerScore) {
               window.alert("You Won the game, your score : " + playerScore + "  computer score : " + computerScore);
            }       
            else if(playerScore < computerScore){
                window.alert("You lose the game, your score : " + playerScore + "  computer score : " + computerScore);
            }else{
                window.alert("You've drawn the game, your score : " + playerScore + "  computer score : " + computerScore);
               
            }
           
    playerScore = 0;
    computerScore = 0;
      
  } game()