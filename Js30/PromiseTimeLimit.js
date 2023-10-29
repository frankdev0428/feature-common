

function timeLimit(fn, t) {
    return async (...args) => {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
      });
  
      const resultPromise = fn(...args);
  
      return Promise.race([resultPromise, timeoutPromise]);
    };
  }
  
  // Example usage:
  const fn1 = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
  };
  const inputs1 = [5];
  const t1 = 50;
  
  const limited1 = timeLimit(fn1, t1);
  const start1 = performance.now();
  let result1;
  
  limited1(...inputs1)
    .then((res) => {
      result1 = { resolved: res, time: Math.floor(performance.now() - start1) };
    })
    .catch((err) => {
      result1 = { rejected: err, time: Math.floor(performance.now() - start1) };
    });
  
  console.log(result1); // Output
  