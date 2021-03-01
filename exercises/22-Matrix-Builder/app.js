// Code goes here

// function maxtrixBuilder(number) {
//     let array = [];
//     for (let i = 0; i < number; i++) {
//         array[i] = [];
//         for (let m = 0; m < number; m++) {
//             array[i][m]=number;
//         }
//     }
//     return array;
// }

function matrixBuilder(matrix){
    let newMatrix=[];
    let newArray =[];
    for(let i=0;i<matrix;i++){
        newMatrix.push(newArray);
    }
    for(let x=0;x<matrix;x++){
        newArray.push(1);
    
    }
    return newMatrix;
}

// do not change anything from this line down   
console.log(matrixBuilder(5));