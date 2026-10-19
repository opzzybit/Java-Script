//         CLASS EXAMPLE
function area(width, height){
    console.log(width * height);
}
function area(width, height){
    return width * height;
}

const total2 = area(4,5) + area(2,3);
console.log(total2);

console.log();
function addPrint(a,b){console.log(a + b);}
function add(a,b){return a + b;}
const x = addPrint(2,3);
const y = add(2,3);
console.log(x,y);





//          CLASS EXERCISE

//MINIMUM NUMBER
console.log();
function minimumNumber (numberOne,numberTwo){
    if (numberOne < numberTwo){
        return numberOne;
    }
    else{
        return numberTwo;
    }
}
//EVEN NUMBER
function evenNumber (number){
 if (number % 2 == 0){
    return true;
 }
 else{
    return false;
 }
}

//AREA OF RECTANGLE
function areaOfRectangle (width,height){
 return width * height
}

const result = minimumNumber(10000, 10);
console.log("minumum number = ",result);

const result2 = evenNumber(50);
console.log(result2 , " it is an even number");

const result3 = areaOfRectangle(4,5);
console.log("the area of the number = " ,result3);
//END OF CLASS EXERCISE





//SHRINKED CODE
console.log();
const shrink = x => x * 2;
console.log(shrink(4))



//DEFAULT VALUES 
console.log();
function greet(name = "john"){
    console.log("Hello, " + name + "!");
}
greet();
greet("moses");
greet("ada" ,"extra","ignored")




//REST ARRAY
console.log();
function sum(...numbers){
    let total = 0
    for (const index of numbers) {
    total += index;
    }
    return total
}
console.log(sum(1,2,3,4))
