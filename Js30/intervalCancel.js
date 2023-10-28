
function cancellable(fn, args, t, cancelT) {
    const result = [];
    const start = performance.now();
  
    const executeFn = () => {
      const diff = Math.floor(performance.now() - start);
      result.push({ "time": diff, "returned": fn(...args) });
    };
  
    // Initial execution of the function
    executeFn();
  
    // Repeated execution of the function every t milliseconds
    const intervalId = setInterval(executeFn, t);
  
    // Schedule the cancellation at cancelT ms
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, cancelT);
  
    // Return a cancel function
    const cancelFn = () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  
    return cancelFn;
  }
  
  // Example usage:
  const fn1 = (x) => x * 2;
  const args1 = [4];
  const t1 = 35;
  const cancelT1 = 190;
  const cancel1 = cancellable(fn1, args1, t1, cancelT1);
  
  const fn2 = (x1, x2) => x1 * x2;
  const args2 = [2, 5];
  const t2 = 30;
  const cancelT2 = 165;
  const cancel2 = cancellable(fn2, args2, t2, cancelT2);
  
  const fn3 = (x1, x2, x3) => x1 + x2 + x3;
  const args3 = [5, 1, 3];
  const t3 = 50;
  const cancelT3 = 180;
  const cancel3 = cancellable(fn3, args3, t3, cancelT3);
  