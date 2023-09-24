// Initialize maxReach to 0, representing the maximum index that can be reached starting from the first index.

// Iterate through the nums array, and at each index:

// Check if the current index is beyond the maximum reachable index (i > maxReach). If it is, return false because it's impossible to reach the last index.
// Update the maxReach to the maximum of the current maxReach and i + nums[i]. This represents the new maximum index that can be reached from the current index.
// If the maxReach becomes greater than or equal to the last index (nums.length - 1), return true because it's possible to reach the last index.

// If we finish the loop without returning false, it means we can reach the last index, so return true.

function canJump(nums) {
    let maxReach = 0; // Initialize the maximum reachable index to 0

    for (let i = 0; i < nums.length; i++) {
        // If the current index is beyond the maximum reachable index, return false
        if (i > maxReach) {
            return false;
        }

        // Update the maximum reachable index
        maxReach = Math.max(maxReach, i + nums[i]);

        // If the maximum reachable index is greater than or equal to the last index, return true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return true; // If we reach this point, it means we can reach the last index
}