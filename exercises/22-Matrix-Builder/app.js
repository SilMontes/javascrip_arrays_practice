// Code goes here

function maxtrixBuilder(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        array[i] = [];
        for (let m = 0; m < number; m++) {
            array[i][m]=number;
        }
    }
    return array;
}


// do not change anything from this line down   
console.log(matrixBuilder(5));