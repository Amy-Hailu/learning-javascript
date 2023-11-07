function lifeInWeeks(Age){

var numberOfYearsRemaining = 90 - Age;
var numberOfDays = numberOfYearsRemaining * 365;
var numberOfWeeks = numberOfYearsRemaining * 52;
var numberOfMonths = numberOfYearsRemaining * 12;

console.log("You have " + numberOfDays + " days, " + numberOfWeeks + " Weeks," + " and " + numberOfMonths + " Months left")

};

lifeInWeeks(40)
