// We initialize two variables, majority and count. majority represents the majority element, and count represents the count of that element.

// We iterate through the array, starting from the second element (i = 1).

// Inside the loop, we check if count becomes 0. If it does, we update majority to the current element, and we reset count to 1.

// If the current element is the same as the majority element, we increment count.

// If the current element is different from the majority element, we decrement count.

// After processing all elements, the majority variable will contain the majority element that appears more than n / 2 times in the array, where n is the length of the array.

// In both of your example cases, this algorithm will correctly identify the majority element (3 and 2, respectively).


function majorityElement(nums) {
    let majority = nums[0]; // Initialize the majority element
    let count = 1; // Initialize the count of the majority element
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
            count = 1;
        } else if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }
    }
    
    return majority;
}

// Example usage:
const nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Output: 3

const nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2