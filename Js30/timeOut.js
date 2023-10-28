function createDelayedFunction(fn, args, t) {
    let timeoutId;
    let isCancelled = false;

    const promise = new Promise((resolve) => {
        timeoutId = setTimeout(() => {
            if(!isCancelled) {
                resolve(fn(...args));
            }
        },t);
    },);
    const cancelFn = () => {
        isCancelled = true;
        clearTimeout(timeoutId);
    };
    return { promise, cancelFn};
}

//Example usage:
const { promise , cancelFn } = crateDelayedFunction(
    (a,b) => a + b,
    [5,7],
    3000
);

promise
  .then((result) => {
    console.log('Result: ${result}')
  })
  .catch((error) => {
    console.error('Error: ${error}');
  });