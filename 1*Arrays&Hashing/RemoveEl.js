We start by declaring a function removeElement that takes two arguments: nums (the input array) and val (the value to be removed).

We initialize a variable k to 0. This variable will keep track of the count of elements in nums that are not equal to val.

// We use a for loop to iterate through the nums array.

// Inside the loop, we check if the current element nums[i] is not equal to val using the !== operator. If it's not equal, it means we want to keep this element.

// When we encounter an element that is not equal to val, we copy it to the position k in the nums array. This effectively moves the non-val element to the front of the array while maintaining the relative order of other elements.

// After copying the element, we increment k by 1 to keep track of the count of non-val elements.

// The loop continues until all elements in the nums array have been checked.

// Finally, we return the value of k, which represents the count of elements in the modified nums array that are not equal to val. These elements are now stored at the beginning of the array, and the order of the remaining elements is not important, as specified in the problem statement.


function removeElement(nums, val) {
    let k = 0;
    for (let i = 0;i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k ;
}