let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

for (let i in par){
    let letters = par[i].toLowerCase();
    if (letters == " ") continue;
    else if (counts[letters] == undefined) {
        counts[letters] = 1;
    }
    else {
        counts[letters] = counts[letters] + 1;
    }
}
console.log(counts);

// let nospaces = par.replace(/\s/g, '');
// let intoletters = nospaces.split("");
// for (var i=0; i< intoletters.length; i++){
//     let letters=intoletters[i].toLowerCase();
//     if (counts[letters] == undefined){
//         counts[letters] = 1;
//     }
//     else{
//         counts[letters] = counts[letters] + 1;
//     }
// }
// console.log(counts);



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

