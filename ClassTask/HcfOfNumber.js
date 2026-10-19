console.log("\t\t\t H C F  Calculator")

const userInput = require("prompt-sync")();


console.log("\t Enter how many number do you want to enter");

let userAmount = 0;

while(true){
let amount = Number (userInput("Enter amount between 2 - 6:  "));
if (amount <= 6 ){
    console.log();  
    console.log("\t\t\t let get the calculation started")
    userAmount += amount
    break;
}
else{
    console.log();  
    console.log("Enter a number between 2-6")
}
}


console.log();  
let numberInputed = []
for (let number = 1; number <= userAmount; number ++ ){
let numberCount1 = Number (userInput("Enter first number:  "));
numberInputed.push(numberCount1);
}
console.log(numberInputed);



let primeFactor = [[],[],[],[],[]]
let divisor = 2;
for (let index = 0; index <= numberInputed.length+1;index ++){
    for(let count = 1; count < numberInputed.length+1; count ++){
        
        while (numberInputed[index] > 1){
            
            if (numberInputed[index] % divisor === 0 ){
                numberInputed[index] = Math.floor(numberInputed[index] / divisor);
                primeFactor[0].push(divisor)
            }
            if (numberInputed[count] % divisor === 0){
                numberInputed[count] = Math.floor(numberInputed[count] / divisor);
                console.log();  
                console.log(divisor);
            }   
            else{    
                divisor += 1
            }
        }
    
    
    }
}
console.log(primeFactor);














//for(let index = 2; index <= numberCount1; index ++ ){
    
//if(numberCount1 % index == 0){
     
      //console.log(index / 2)   
     //}
//}

 





