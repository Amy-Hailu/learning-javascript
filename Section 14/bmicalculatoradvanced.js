//Create your function below this line
//declare a function name with required inputs
function bmiCalculator(weight, height) {

// set a variable to get actual height calculataion
    var actualHeight = Math.pow(height,2);
// set bmi variable to calculate bmi solution
    var bmi = Math.floor(weight / actualHeight);
// returns bmi variable as a output with return key word
    if (bmi < 18.5) {

        return "Your BMI is, " + bmi + " so you are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {

        return "Your BMI is, " + bmi + " so you have a normal weight.";
    }
    else {
        return "Your BMI is, " + bmi + " so you are overwieght.";
    }

}
var bmiMessage = bmiCalculator(65,1.8);
console.log( bmiMessage)










/*If my weight is 65kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65,1.8);

bmi should equal 20 in this case.
*/