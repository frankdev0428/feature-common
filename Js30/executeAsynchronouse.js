function promiseAll(functions) {
    return new Promise((resolve, reject) => {
      const results = new Array(functions.length);
      let resolvedCount = 0;
      let rejected = false;
  
      for (let i = 0; i < functions.length; i++) {
        functions[i]()
          .then((value) => {
            if (!rejected) {
              results[i] = value;
              resolvedCount++;
  
              if (resolvedCount === functions.length) {
                resolve(results);
              }
            }
          })
          .catch((reason) => {
            if (!rejected) {
              rejected = true;
              reject(reason);
            }
          });
      }
    });
  }
  
  // Example usage:
  const functions = [
    () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
  ];
  
  promiseAll(functions)
    .then((result) => {
      console.log({ t: 200, resolved: result });
    })
    .catch((error) => {
      console.error({ t: 200, rejected: error });
    });
  