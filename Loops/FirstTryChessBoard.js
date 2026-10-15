const userInput = require("prompt-sync")();

let inputNumber = 0;

let compare = true; 
while(compare){
let numberCount = Number (userInput("Enter any number from 1 - 20:  "));
     if (Number.isNaN(numberCount)){
           console.log();
           console.log ("Enter a valid number")   
    }
    
    else if (numberCount >= 20 || numberCount <= 0){
       console.log();
       console.log("Enter number between 1-20 ")
    }
    else{
         inputNumber += numberCount;
         compare += false;
         break;
    }
}
for (let numberOfTimes = 1; numberOfTimes <= inputNumber; numberOfTimes ++){
        if (numberOfTimes % 2 == 0){
            console.log ("  #  #  #  #")
        }
        else{
            console.log ("#  #  #  #")
        }
 }

