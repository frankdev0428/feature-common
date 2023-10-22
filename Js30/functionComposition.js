

function composeFunctions(functions) {
    return function (x) {
        return functions.reduceRight((result, fn) => fn(result), x);
    };
}

// Example usage:
const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const composedFunction1 = composeFunctions(functions1);
console.log(composedFunction1(4)); // Output: 65

const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const composedFunction2 = composeFunctions(functions2);
console.log(composedFunction2(1)); // Output: 1000

const emptyFunctions = [];
const composedFunction3 = composeFunctions(emptyFunctions);
console.log(composedFunction3(42)); // Output: 42
