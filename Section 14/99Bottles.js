

function beer() { 

    var count = 3;

    while(count > -1) {
        
        if(count >= 2)
        {
            console.log(count + " bottles of beer on that wall," + count + " bottles of beer." + 
                    " Take one down and pass it around," + --count + "  bottles of beer on the wall" )
        }

        if (count === 1)
        {
            console.log(count + " bottles of beer on that wall," + count + " bottles of beer." + 
                    " Take one down and pass it around, no bottles of beer on the wall" ) 
           --count;
        }
        
        if(count === 0)    
        {
            console.log("Buy more")
            --count;
        }
    
    }
}

beer();