//SUM OF NUMBER FROM 1-THE NUMBER YOU ENTER
function sumOfNumber(number){
    
    let totalNumber = 0;
    for (let index = 1; index <= number; index++){
         console.log (index);
         totalNumber += index;
    }
    console.log ();
    return totalNumber;
};
result = sumOfNumber(9);
console.log ("the total sum of 1-9 = ",result);


//EXPRESSION CALCULATOR
console.log ();
function computedExpression(number1,number2,number3,number4,number5){

    let result1 = number1 * number2 - number3 * number5;
    let result2 = number2 - number4;

    const mainResult = result1 / result2;
    return mainResult;
};
result = computedExpression(9.5,4.5,3.5,2.5,3);
console.log ("the result of the expression = ",result);


//AREA AND PERIMETER OF A CIRCLE CALCULATOR
console.log ();
function areaOfCircle(radius,pi){

    let perimeter = 2 * radius * pi;
    let area = radius * radius * pi;
    
    console.log ("the perimeter of the circle = ",perimeter);
    console.log (`the perimeter of the circle approximated = ${perimeter.toFixed(2)}`);
    return area;
};
result = areaOfCircle(5.5,22/7);
console.log ("the area of the circle = ",result);
console.log ("the area of the circle approximated = ",result.toFixed(2));


//AREA OF A RECTANGLE CALCULATOR
console.log ();
function areaOfRectangle(width,height){

    let area = width * height;
    return area;  
};
result = areaOfRectangle(4.5,7.9);
console.log ("the area of the rectangle = ",result);
console.log ("the area of the rectangle approximated = ",result.toFixed(2));


//AVERAGE SPEED CALCULATOR
console.log ();
function avearageSpeed(kilometer,minutes,seconds){
    
    let hours = (minutes / 60) + (seconds/3600 );
    let miles = kilometer / 1.6;
    let averageSpeedKilo = kilometer / hours;
    
    const averageSpeedMile = miles / hours;
    
    console.log (`the time converted = ${hours.toFixed(5)} hours`);
    console.log (`the mile converted = ${miles} mph`);
    console.log ("the average speed in kilometer = ",averageSpeedKilo ,"km/h");
    console.log (`the average speed in kilometer approximated = ${averageSpeedKilo.toFixed(3)} km/h`);

    return averageSpeedMile; 

};
result = avearageSpeed(14,45,30);
console.log ("the average speed in miles  = ",result,"mph");
console.log ("the average speed in miles  approximated = ",result.toFixed(2),"mph");

