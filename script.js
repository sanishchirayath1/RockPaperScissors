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
        alert("It is a tie,\n your score : " + playerScore + "  computer score : " + computerScore);
    }

    else if (player === "rock" && computer === "paper"){  
        computerScore += 1;
        alert("You loses, Paper beats Rock,\n your score : " + playerScore + "  computer score : " + computerScore);

    }
    
    else if (player === "rock" && computer === "scissors"){
        playerScore += 1;
        alert("You Wins, Rock beats Scissors,\n your score : " + playerScore + "  computer score : " + computerScore);
    }
    
    else if (player === "paper" && computer === "rock"){
        playerScore += 1;
        alert("You Wins, Paper beats rock,\n your score : " + playerScore + "  computer score : " + computerScore);
    }

    else if (player === "paper" && computer === "scissors"){
        computerScore += 1;
        alert("You loses, Scissors beats Paper,\n your score : " + playerScore + "  computer score : " + computerScore);
    }
    
    else if (player === "scissors" && computer === "paper"){
        playerScore += 1;
         alert("You Wins, Scissors beats Paper,\n your score : " + playerScore + "  computer score : " + computerScore);
    }
    
    else if (player === "scissors" && computer === "rock"){
        computerScore += 1;
        alert("You loses, Rock beats Scissors,\n your score : " + playerScore + "  computer score : " + computerScore);

    }else {
    //another trial if spelling is wrong
       playRound()
    
    }

  }

  
  

  function game() {

    
        for (let i = 0; i < 5; i++) {
            console.log(playRound());

        }
        
            if (playerScore > computerScore) {
               window.alert("You Won the game,\n your score : " + playerScore + "  computer score : " + computerScore);
            }       
            else if(playerScore < computerScore){
                window.alert("You lose the game,\n your score : " + playerScore + "  computer score : " + computerScore);
            }else{
                window.alert("You've drawn the game,\n your score : " + playerScore + "  computer score : " + computerScore);
               
            }
           
    playerScore = 0;
    computerScore = 0;
      
  } game()