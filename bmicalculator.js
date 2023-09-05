//Create your function below this line
//declare a function name with required inputs
function bmiCalculator(weight, height) {

// set a variable to get actual height calculataion
    var actualHeight = Math.pow(height,2);
// set bmi variable to calculate bmi solution
    var bmi = Math.floor(weight / actualHeight);
// returns bmi variable as a output with return key word
    return bmi;
    // clean up code is below
    // return  Math.floor(weight / Math.pow(height,2))
}
var bmi = bmiCalculator(65,1.8);
console.log( "Your BMI is " + bmi)

/*If my weight is 65kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65,1.8);

bmi should equal 20 in this case.
*/
