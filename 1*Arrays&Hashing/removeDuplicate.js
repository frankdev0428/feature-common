// The function first checks if the length of the input array nums is less than or equal to 2. If so, there's no need to remove duplicates, and the function returns the length of the array.

// We initialize two pointers, i and j. i is used to iterate through the array, and j is used to check for unique elements starting from the third element (j = 2).

// We iterate through the array using the for loop, starting from the third element (index 2).

// Inside the loop, we compare the current element nums[j] with the element at position i - 2. If they are not equal, it means we have a new unique element, so we copy it to the i-th position.

// We increment i to point to the next available position for inserting unique elements.

// After processing all elements, we return i, which represents the count of unique elements with at most two occurrences.

// This algorithm modifies the input array in-place and ensures that the relative order of the elements is preserved while meeting the criteria of at most two occurrences of each unique element.

function removeDuplicates(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let i = 2; // Start from the third element.
    for (let j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
}
