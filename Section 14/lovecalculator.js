const prompt = require("prompt-sync")({sigint: true});
function getLoveScore(firstName,lastName) {

     console.log(firstName + " " +  lastName);
    
     var n = Math.random();
     var randomLoveNumber = Math.floor(n * 100) + 1

    return randomLoveNumber;     
}
    var firstName = prompt("what is your First Name?");
    var lastName = prompt("what is your Last Name?");
    var randomLoveNumber = getLoveScore(firstName,lastName)
    console.log("your love score is " + randomLoveNumber);
      

