class ArrayWrapper {
    constructor(arr) {
      this.arr = arr;
    }
  
    // Overriding the '+' operator
    static addArrays(obj1, obj2) {
      const arr1 = obj1 instanceof ArrayWrapper ? obj1.arr : [];
      const arr2 = obj2 instanceof ArrayWrapper ? obj2.arr : [];
      const result = new ArrayWrapper([...arr1, ...arr2]);
      return result;
    }
  
    // Overriding the 'String()' function
    toString() {
      return `[${this.arr.join(',')}]`;
    }
  }
  
  // Example usage
  const nums1 = new ArrayWrapper([1, 2]);
  const nums2 = new ArrayWrapper([3, 4]);
  
  const sumResult = ArrayWrapper.addArrays(nums1, nums2);
  console.log(sumResult); // Output: ArrayWrapper { arr: [ 1, 2, 3, 4 ] }
  
  const stringResult = String(new ArrayWrapper([23, 98, 42, 70]));
  console.log(stringResult); // Output: "[23,98,42,70]"
  
  const emptyArraySum = nums1 + new ArrayWrapper([]);
  console.log(emptyArraySum); // Output: 3
  