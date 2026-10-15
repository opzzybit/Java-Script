let sumArray = [2,7,8,5];
let target = 9;

let newSumArray = []

for (let index = 0 ; index <= sumArray.length; index ++){
    for (let count = index + 1; count <= sumArray.length; count++){
         result = sumArray[index] + sumArray[count]
         
         if (result == target){
            newSumArray.push(index , count);
         }
    }
}
console.log ("The index of the target  = ", newSumArray);
