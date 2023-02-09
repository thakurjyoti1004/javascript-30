let rollButton = document.querySelector("button");
rollButton.addEventListener("click", function(){
   let diceNumberOnRoll=[showRandonNo(7),showRandonNo(7)];
   console.log(diceNumberOnRoll[0]);
   let winnerOutput = document.querySelector("#output");
   if(diceNumberOnRoll[0]==diceNumberOnRoll[1]){
   winnerOutput.innerText ="Its a draw"; 
   }
   else if(diceNumberOnRoll[0]>diceNumberOnRoll[1]){
    winnerOutput.innerText = "Player 1 Wins";
   }else{
    winnerOutput.innerText = "Player 2 Wins";
   }
   document.querySelector("#player-1-area").innerHTML= diceNumberOnRoll[0];
   document.querySelector("#player-2-area").innerHTML= diceNumberOnRoll[1];
});


function showRandonNo(num){
    let randomNumber = Math.floor(Math.random()*num);
    let n = 9855 + randomNumber;
    let char = "&#" + n + ";" ;
    return randomNumber + " " + char;
}

