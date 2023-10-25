function memoize(fn) {
    const cache = new Map();
    const callCount = { count: 0 };

    function factorial(n) {
        if (cache.has(n)) {
            return cache.get(n);
        }

        callCount.count++;
        if (n <= 1) {
            return 1;
        } else {
            const result = n * factorial(n - 1);
            cache.set(n, result);
            return result;
        }
    }

    function fib(n) {
        if (cache.has(n)) {
            return cache.get(n);
        }

        callCount.count++;
        if (n <= 1) {
            return 1;
        } else {
            const result = fib(n - 1) + fib(n - 2);
            cache.set(n, result);
            return result;
        }
    }

    return function (fnName, actions, values) {
        if (fnName === "factorial") {
            callCount.count = 0;
            const results = [];
            const memoizedFactorial = memoize(factorial);
            actions.forEach((action, i) => {
                if (action === "call") {
                    results.push(memoizedFactorial(values[i][0]));
                } else if (action === "getCallCount") {
                    results.push(callCount.count);
                }
            });
            return results;
        } else if (fnName === "fib") {
            callCount.count = 0;
            const results = [];
            const memoizedFib = memoize(fib);
            actions.forEach((action, i) => {
                if (action === "call") {
                    results.push(memoizedFib(values[i][0]));
                } else if (action === "getCallCount") {
                    results.push(callCount.count);
                }
            });
            return results;
        }
    };
}

// Example 1
const fnName1 = "sum";
const actions1 = ["call", "call", "getCallCount", "call", "getCallCount"];
const values1 = [[2, 2], [2, 2], [], [1, 2], []];
const result1 = memoize(fnName1, actions1, values1);
console.log(result1);

// Example 2
const fnName2 = "factorial";
const actions2 = ["call", "call", "call", "getCallCount", "call", "getCallCount"];
const values2 = [[2], [3], [2], [], [3], []];
const result2 = memoize(fnName2, actions2, values2);
console.log(result2);

// Example 3
const fnName3 = "fib";
const actions3 = ["call", "getCallCount"];
const values3 = [[5], []];
const result3 = memoize(fnName3, actions3, values3);
console.log(result3);
