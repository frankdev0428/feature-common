// In this implementation, the createCounter function takes an initial value n and returns an inner function increment. The inner function, when called, returns the current value of the counter variable and then increments it. This creates a closure where the state (the value of counter) is retained between calls to increment.


function createCounter(n) {
    // Initialize a counter variable with the initial value
    let counter = n;

    // Define the inner function that will be returned
    function increment() {
        return counter++;
    }

    return increment;
}

// Example usage:

const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12

// For the second example:

const counter2 = createCounter(-2);
console.log(counter2()); // Output: -2
console.log(counter2()); // Output: -1
console.log(counter2()); // Output: 0
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2