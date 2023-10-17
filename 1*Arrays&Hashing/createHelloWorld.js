

function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Example usage:
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"

// You can pass any arguments, but it will still return "Hello World"
console.log(f({}, null, 42)); // Output: "Hello World"
