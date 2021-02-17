var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
// for(let i = 0; i<10;i++){
//         your loop content here   
// }
//*****************
//let random = Math.floor(Math.random()*10);

 for (let i=0; i<10; i=i+1){
     arr.push(Math.floor(Math.random()*20 ));
 }

console.log(arr);