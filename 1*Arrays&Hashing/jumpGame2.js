// Initialize jumps to 0, representing the number of jumps required.

// Initialize currentMax and nextMax to 0. currentMax keeps track of the maximum index you can reach with the current jumps, and nextMax keeps track of the maximum index you can reach with one more jump.

// Iterate through the nums array, except for the last element because we don't need to jump from the last element. For each index i:

// Update nextMax by taking the maximum of the current nextMax and the maximum index reachable from the current position i (i + nums[i]).
// Check if you've reached the currentMax, meaning it's time to make a jump. In this case, increment jumps, and update currentMax with nextMax.
// Continue this process until you reach the end of the array (i.e., until i is less than n - 1).

// Finally, return jumps, which represents the minimum number of jumps required to reach the end of the array.

function jump(nums) {
    const n = nums.length;
    let jumps = 0;
    let currentMax = 0; // Maximum index you can reach with the current jumps
    let nextMax = 0; // Maximum index you can reach with one more jump

    for (let i = 0; i < n - 1; i++) {
        nextMax = Math.max(nextMax, i + nums[i]);
        
        if (i === currentMax) {
            jumps++;
            currentMax = nextMax;
        }
    }

    return jumps;
}