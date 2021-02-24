let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let result = theBools.map(function(number){
    if(number == 0){
     return  result.push('woko');
    }
    else{
     return result.push('wiki');
    }
   console.log(result);
});
