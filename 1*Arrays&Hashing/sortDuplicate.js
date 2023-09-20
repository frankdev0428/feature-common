function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0; // If the array is empty, there are no duplicates
    }

    let k = 1; // Initialize a variable to keep track of the unique elements

    // Iterate through the array starting from the second element (index 1)
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous unique element
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // Copy the unique element to position k
            k++; // Increment k to indicate a new unique element
        }
    }

    return k; // k now represents the number of unique elements
}
