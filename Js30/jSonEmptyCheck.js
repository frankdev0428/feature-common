function isEmpty(obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length === 0;
    } else {
      return true;
    }
  }
  
  // Example usage:
  const obj1 = { "x": 5, "y": 42 };
  const obj2 = {};
  const arr = [null, false, 0];
  
  console.log(isEmpty(obj1)); // Output: false
  console.log(isEmpty(obj2)); // Output: true
  console.log(isEmpty(arr));  // Output: false
  