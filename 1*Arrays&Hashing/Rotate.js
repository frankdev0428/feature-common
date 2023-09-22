// The rotate function takes two arguments: nums (the integer array to rotate) and k (the number of steps to rotate the array to the right).

// To handle cases where k is larger than the array's length, we calculate the effective rotation steps by taking the remainder of k when divided by the length of the array: k %= nums.length. This ensures that k stays within the bounds of the array.

// We define a helper function called reverse to reverse a portion of the array. It takes three arguments: nums (the array), start (the starting index), and end (the ending index). The reverse function swaps elements from start to end until they meet in the middle, effectively reversing the portion of the array in-place.

// Next, we use the reverse function to perform the rotation:

// First, we reverse the entire array to put it in a reversed order.
// Then, we reverse the first k elements of the reversed array to bring them to the end.
// Finally, we reverse the remaining elements, which were originally at the end of the array, to restore their original order.


function rotate(nums, k) {
    // Calculate the effective rotation steps (in case k is larger than the array size)
    k %= nums.length;

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}