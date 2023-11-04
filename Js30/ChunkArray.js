// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 9, 6, 3, 2];
const arr3 = [8, 5, 3, 2, 6];
const arr4 = [];
const size1 = 1;
const size2 = 3;
const size3 = 6;
const size4 = 1;

console.log(chunkArray(arr1, size1)); // Output: [[1],[2],[3],[4],[5]]
console.log(chunkArray(arr2, size2)); // Output: [[1,9,6],[3,2]]
console.log(chunkArray(arr3, size3)); // Output: [[8,5,3,2,6]]
console.log(chunkArray(arr4, size4)); // Output: []

function chunkArray(arr, size) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  }