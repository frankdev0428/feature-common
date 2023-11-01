function debounce(fn, t) {
    let timeout;
  
    return function () {
      const context = this;
      const args = arguments;
  
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(context, args);
      }, t);
    };
  }
  
  // Example usage:
  const debouncedFunction = debounce((message) => {
    console.log(message);
  }, 200);
  
  debouncedFunction("Hello, this will be debounced."); // This will be delayed for 200ms.
  debouncedFunction("World"); // This call will cancel the previous one.
  