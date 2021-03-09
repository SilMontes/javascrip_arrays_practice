function lyricsGenerator(array){
    let newArray=[];
    let uno="Drop the base";
    let cero="Boom";
    let repeticion="!!!Break the base!!!";
    let counter=0;
    array.map(function(value,i){
        if(array[i]===0){
             newArray.push(cero);
        }
        else{
            if(array[i]===1){
                 newArray.push(uno);
                 counter++;
                 if(counter===3){
                      newArray.push(repeticion);
                 }

            }
           
        }   
    })
    let newSong=newArray.join(" ");
    return newSong+" ";
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
 console.log(lyricsGenerator([1,0,1]))
 console.log(lyricsGenerator([1,1,1]))