console.log("\t\t\tHCF  Calculator")

const userInput = require("prompt-sync")();

console.log("\t Enter how many number do you want to enter");
let amount = Number (userInput("Enter amount:  "));


console.log()  
let numberInputed = []
for (let number = 1; number <= amount; number ++ ){
let numberCount1 = Number (userInput("Enter first number:  "));
numberInputed.push(numberCount1)
}

console.log(numberInputed)










//for(let index = 2; index <= numberCount1; index ++ ){
    
//if(numberCount1 % index == 0){
     
      //console.log(index / 2)   
     //}
//}

 





