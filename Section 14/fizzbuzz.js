var output = [];
var count = 1;
 
function test(){


    console.log("here");
}
function fizzBuzz(){

    while(count <=100) {

     if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz");
    }
      
    else if(count % 3 === 0){
        output.push("fizz");
    }

    else if(count % 5 === 0){
        output.push("buzz");
        
    }
  
    else {
        output.push(count);
    }
        
    //output.push(count);
    count++;
    }
    console.log(output);


}

fizzBuzz();
 test();
 






