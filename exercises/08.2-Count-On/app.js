let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let index = 0; index < myArray.length; index++){
   // let element = myArray[index];
    // MAGIC HAPPENS HERE
    // tomar elemento del arreglo y obtener tipo de dato
    // compararlo a un elemento tipo objeto
    let objeto = {};
    if (typeof (myArray[index]) == typeof(objeto) ){
      hello.push(myArray[index]);
    }
   
}
console.log(hello);

