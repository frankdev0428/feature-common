function sortByFunction(arr, fn ) {
    return arr.slice().sort((a,b) => fn(a) - fn(b));
}

//Example 1: 
const arr1 = [5,4,1,2,3]
const fn1 = (x) => ;
const sortedArr1 = sortByFunction(arr1,fn1);
console.log(sortedArr1); // Output: [1,2,3,4,5];

//Example 2:
const arr2 = [{"x": 1}, {"x": 0}, {"x": -1}];
const fn2 = (d) => d.x;
const sortedArr2 = sortByFunction(arr2, fn2);
console.log(sortedArr2); // Output: [{"x": -1}, {"x": 0}, {"x": 1}]

// Example 3:
const arr3 = [[3, 4], [5, 2], [10, 1]];
const fn3 = (x) => x[1];
const sortedArr3 = sortByFunction(arr3, fn3);
console.log(sortedArr3); // Output: [[10, 1], [5, 2], [3, 4]]
