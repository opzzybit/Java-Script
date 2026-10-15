const userInput = require("prompt-sync")();

let InputNumber = 0;

let compare = true;
while (compare){
let number = Number(userInput("Enter a number : "));

        if (Number.isNaN(number)){
           console.log ("Enter a valid number")   
          }
        else {
            InputNumber += number;
            compare += false;
            break; 
            }
}

for (let index = 1; index <= 12; index++){
    let result = InputNumber * index;
    console.log (InputNumber + " * " + index + " = " + result)
}
