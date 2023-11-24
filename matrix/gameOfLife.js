function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // Check if the first row contains zero
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // Check if the first column contains zero
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // Mark rows and columns that need to be zeroed
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Zero out marked rows (except first row)
    for (let i = 1; i < rows; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < cols; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out marked columns (except first column)
    for (let j = 1; j < cols; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < rows; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out first row if required
    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero out first column if required
    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}

// Test cases
const matrix1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(matrix1);
console.log(matrix1); // Output: [[1,0,1],[0,0,0],[1,0,1]]

const matrix2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
setZeroes(matrix2);
console.log(matrix2); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
