function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the input array in ascending order
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Skip duplicates
            let left = i + 1;
            let right = nums.length - 1;
            const target = -nums[i];

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++; // Skip left duplicates
                    while (left < right && nums[right] === nums[right - 1]) right--; // Skip right duplicates
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

// Example 1
const nums1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1)); // Output: [[-1, -1, 2], [-1, 0, 1]]

// Example 2
const nums2 = [0, 1, 1];
console.log(threeSum(nums2)); // Output: []

// Example 3
const nums3 = [0, 0, 0];
console.log(threeSum(nums3)); // Output: [[0, 0, 0]]
