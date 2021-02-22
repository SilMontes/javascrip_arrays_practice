let numbers = [2,13,34,5];
function sumTheElements(theArray){
	
	var total =0;
	
	//your code here
    for (var i=0; i<theArray.length; i++){
      total += parseInt(theArray[i]);
     
    }
   return total;
}
sumTheElements(numbers);