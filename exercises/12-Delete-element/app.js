var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName){
    let peopleNames=[];
    //your code here
    for( var i=0; i<people.length; i++){
        if(people[i] !== personName){
         peopleNames.push(people[i]) 
          
        }
         
    }
    return peopleNames;
   
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));