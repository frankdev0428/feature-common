function containsNearbyDuplicate(nums, k) {
    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numIndices.has(nums[i]) && i - numIndices.get(nums[i]) <= k) {
            return true;
        }
        numIndices.set(nums[i], i);
    }

    return false;
}

// Test cases
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false
