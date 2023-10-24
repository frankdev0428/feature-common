
function composeFunctions(functions) {
  return function (x) {
    return functions.reduceRight((result,fn) => fn(result),x);
  };
}

// Example 1
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const composedFn1 = composeFunctions(functions1);
const result1 = composedFn1(4);
console.log(result1);  // Output: 65

// Example 2
const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const composedFn2 = composeFunctions(functions2);
const result2 = composedFn2(1);
console.log(result2);  // Output: 1000

// Example 3
const functions3 = [];
const composedFn3 = composeFunctions(functions3);
const result3 = composedFn3(42);
console.log(result3);  // Output: 42