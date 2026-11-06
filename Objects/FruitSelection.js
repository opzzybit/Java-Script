const objectFruit = {
   apple: 10,
   banana: 5,
   orange: 8,
   mango: 12
 };
 
let count = 0;
for (object of Object.entries(objectFruit)){
   console.log(object);
   count ++;
} 
console.log();
console.log("The number of fruit is  ", count);
