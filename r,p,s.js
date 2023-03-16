function getComputerChoice() {
    let chars = [ "rock", "paper", "scissors" ];
    return chars[ Math.floor(Math.random() * chars.length)];
 }
 

 const prompt = require('prompt-sync')();
 
 function entryf(){
    const prompt = require('prompt-sync')();
 let entry = prompt("What do you choose? Rock,Paper or Scissors: ");
      return entry;
    }
 

 function playRound(comchoice, plchoice){
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  let counterpl = 0;
  let countercom = 0;
  if(comchoice === rock && plchoice === paper ){
    console.log("Computer: Rock  Player: Paper");
    return true;}
  else if(comchoice === rock && plchoice === scissors ){
    console.log("Computer: Rock  Player: Paper");
    return false;  }
  else if(comchoice === paper && plchoice === scissors ){
    console.log("Computer: Paper  Player: Scissors");
    return true;  }
  else if(comchoice === paper && plchoice === rock ){
    console.log("Computer: Paper  Player: Scissors");
    return false;  }
  else if(comchoice === scissors && plchoice === paper ){
    console.log("Computer: Scissors  Player: Paper");
    return false; }
  else if(comchoice === scissors && plchoice === rock ){
    console.log("Computer: Scissors  Player: Rock");
   return true;  }
  else if(comchoice === plchoice){
    console.log("Computer: "+comchoice +" Player: " +plchoice);
   return "draw";  }
 }
 
function game(){
 
 for(let i = 0; i<5;i++){
  let choicecomputer = getComputerChoice();
  let plchoice = entryf();
  if(plchoice == "rock" || plchoice == "scissors" || plchoice == "paper"){
  let resultround = playRound(choicecomputer,plchoice);
  if(resultround == true){
    console.log("You won! The new score is: ");
  }
  else if(resultround == false){
    console.log("You lost! The new score is: ");
  }
  else{
    console.log("Draw! The score is: ");
  }
  }
  else if(plchoice !== "rock" && plchoice !== "scissors" && plchoice !== "paper"){
    plchoice = entryf();
    
  }
 }
 }

game();
