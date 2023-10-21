function customFilter(arr, fn) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const isEven = function (n) {
    return n % 2 === 0;
};
console.log(customFilter(arr, isEven)); // Output: [2, 4]

const isIndexOdd = function (n, i) {
    return i % 2 !== 0;
};
console.log(customFilter(arr, isIndexOdd)); // Output: [2, 4]
