function lyricsGenerator(array){
    let newArray=[];
    let cero="Drop";
    let uno="Boom";
    array.map(function(value){
        if(value==0){
             newArray.push(cero);
        }
        else{
            newArray.push(uno);
        }   
    })
    
    return newArray
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))