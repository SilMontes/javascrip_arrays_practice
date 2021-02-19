let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};


let separate = string => {
    let words= string.split(" ");
    return words.map( letter => letter[letter.length].toLowerCase());
}

console.log(separate(par));




// let separate = string => {
//     let words = string.split(" ");
//     return words;
// } 

// console.log(separate(par));

// your code here
// for(var i=0; i<par.length; i++){
//     par.forEach (item, index) => {
//         if(par[i].includes("") )
//     }
// }
// console.log(counts);

