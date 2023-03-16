function getComputerChoice() {
    let chars = [ "Rock", "Paper", "Sciccors" ];
    return chars[ Math.floor(Math.random() * chars.length)];
 }
 

 const prompt = require('prompt-sync')();
 
 function entryf(choicecom){
    const prompt = require('prompt-sync')();
 let entry = prompt("What do you choose? Rock,Paper or Scissors: ");
 entry=entry.toLowerCase();
    if(entry !== "rock" && entry !== "scissors" && entry !== "paper"){
      entryf();
    }
    else if(entry == "rock" || entry == "scissors" || entry == "paper"){
      return entry;
    }
            }
 

 function playRound(comchoice, plchoice){
  comchoice = comchoice.toLowerCase();
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";

  if(comchoice === rock && plchoice === paper ){

  }
  else if(comchoice === rock && plchoice === scissors ){
  }
  else if(comchoice === paper && plchoice === scissors ){
  }
  else if(comchoice === paper && plchoice === rock ){
  }
  else if(comchoice === scissors && plchoice === paper ){
  }
  else if(comchoice === scissors && plchoice === rock ){
  }
  else if(comchoice === plchoice){
  }
 }
function game(){
 
 for(let i = 0; i<5;i++){
  let choicecomputer = getComputerChoice();
  let plchoice = entryf(choicecomputer);
  playRound(choicecomputer,plchoice);

 }
}
 
game();
