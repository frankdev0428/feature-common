function minSubarrayLen(target, nums) {
    let minLength = Infinity;
    let left = 0;
    let sum = 0;
  
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];
  
      while (sum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left];
        left++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  
  // Example usage:
  console.log(minSubarrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
  console.log(minSubarrayLen(4, [1, 4, 4])); // Output: 1
  console.log(minSubarrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0
  