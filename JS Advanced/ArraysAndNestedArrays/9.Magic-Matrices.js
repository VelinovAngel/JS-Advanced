function magicMatrix(matrix) {

    let sum = matrix[0].reduce((a, b) => a + b, 0);

    for (let row = 1; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((a, b) => a + b, 0);

        if (rowSum !== sum) {
            return false;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        let colSum = matrix.reduce((a, b) => a + b[row], 0);

        if (colSum !== sum) {
            return false;
        }
    }

    return true;
}


console.log(magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));