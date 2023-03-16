function getComputerChoice() {
    let chars = [ "Rock", "Paper", "Sciccors" ];
    return chars[ Math.floor(Math.random() * chars.length)];
 }
 let choicecomputer = getComputerChoice();

 const prompt = require('prompt-sync')();
 
 function entryf(choicecom){
    const prompt = require('prompt-sync')();
 let entry = prompt("What do you choose? Rock,Paper or Scissors: ");
 entry=entry.toLowerCase();
    if(entry !== "rock" && entry !== "scissors" && entry !== "paper"){
      entryf();
    }
    else if(entry == "rock" || entry == "scissors" || entry == "paper"){
      playRound(choicecom,entry)
      return [choicecom,entry];
    }
            }
 

 function playRound(comchoice, plchoice){
  comchoice = comchoice.toLowerCase();
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";
  
  if(comchoice == rock && plchoice == paper ){

  }
  else if(comchoice == rock && plchoice == scissors ){

  }
  else if(comchoice == plchoice){

  }
 }
function game(){
 let [comchoice,plchoice] = entryf(choicecomputer);
 for(let i = 0; i<5;i++){
  playRound(comchoice,plchoice);

 }
}
 

