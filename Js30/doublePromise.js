

function sumPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then((results) => {
            const [result1, result2] = results;
            return result1 + result2;
        });
}

// Example 1
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
sumPromises(promise1, promise2)
    .then(result => console.log(result));

// Example 2
const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));
sumPromises(promise3, promise4)
    .then(result => console.log(result));