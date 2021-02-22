var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName){
    let peopleNames=[];
    //your code here
    for(i=0; i<people.length; i++){
        if(people[i] == personName){
          people.splice(people[i], 0)
        }
         else {
             peopleNames.push(people[i])
         }
    }
    return peopleNames;
   
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));