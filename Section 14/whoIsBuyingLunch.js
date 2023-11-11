
//var length = famList.lenth;
//var randomFamName = famList.length = 4;

function whosPaying(famList) {

    //get random index value 
    var randomFamIndex=  Math.floor(Math.random() * famList.length);
    
    //get random item
    var randomFamName = famList[randomFamIndex];
    
    return randomFamName;
        
    }
    
    var famList = ["Jay","Ruth","Raeye","Robel","Nathan","Eb"];
    
    var result = whosPaying(famList);
    
    console.log(result + " is going to buy lunch today!");






}