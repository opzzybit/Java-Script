function range (indexs){
 let newArray = []
 for(let count = 1; count <= indexs ;count++){
    newArray.push(count);
 }
 return newArray;
}
let result = range(5)
console.log("inputted number form 1-5 to an array = ",result)



function sum(numbers){
 let total = 0 
for(let count = 1; count <= numbers ;count++){
    total += count;
 }
return total;
}
let resultTwo = sum(10)
console.log("sum of number between 1-10 = ",resultTwo)




function reverseArray(index3){
 let numberArray = []
 let numberArrayTwo = []
 for(let count = 1; count <= index3 ;count++){
    numberArray.push(count);
 }
 for (let index = 1; index <= numberArray.length; index++){
    numberArrayTwo.unshift(index)
 }
 return numberArrayTwo;
}
let resultThree = reverseArray(20)
console.log("the first reversed array = ",resultThree)





function reverseArrayInPlace(index2){
 let numberArrayThree = []
 for (let index = 1; index <= index2.length; index++){
    numberArrayThree.unshift(index)
 }
 
 return numberArrayThree;
}
let resultfour = reverseArrayInPlace([1,2,3,4,5,6])
console.log("the reversed array in place ",resultfour)
