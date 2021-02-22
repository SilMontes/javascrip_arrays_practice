let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList (array_name){
    let odd = [];
    let even = [];
    for (y=0; y<array_name.length; y++){
        if(array_name[y] % 2 ==0){
            even.push(array_name[y])
        }
        else{
           odd.push(array_name[y]) 
        }
    }
    return odd.concat(even);
}

console.log(mergeTwoList(list_of_numbers))
