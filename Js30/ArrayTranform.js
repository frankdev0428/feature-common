function map(arr, fn) {
    const mappedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(fn(arr[i], i));
    }
    
    return mappedArray;
}

// Example usage:
const arr1 = [1, 2, 3];
const plusOne = function plusone(n) {
    return n + 1;
};
console.log(map(arr1, plusOne)); // Output: [2, 3, 4]

const arr2 = [1, 2, 3];
const plusI = function plusI(n, i) {
    return n + i;
};
console.log(map(arr2, plusI)); // Output: [1, 3, 5]

const arr3 = [10, 20, 30];
const constant = function constant() {
    return 42;
};
console.log(map(arr3, constant)); // Output: [42, 42, 42]