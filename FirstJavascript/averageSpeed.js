let kilometer = 14;
let minutes  = 45;
let seconds = 30;

hours = (minutes / 60) + (seconds/3600 );
miles = kilometer / 1.6;
averageSpeedKilo = kilometer / hours;
averageSpeedMile = miles / hours;


console.log (`the average in miles = ${averageSpeedMile.toFixed(3)} mph `);
console.log (`the avearge in kilometer = ${averageSpeedKilo.toFixed(3)} km/h`);
console.log (`the time = ${hours.toFixed(5)} hours`);
console.log (`the mile = ${miles} mph`);
