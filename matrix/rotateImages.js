function rotate(matrix) {
    const n = matrix.length;
  
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }
    }
}

// Test cases
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotate(matrix1);
console.log(matrix1); // Output: [[7,4,1],[8,5,2],[9,6,3]]

const matrix2 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];
rotate(matrix2);
console.log(matrix2); // Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
