
// Create three arrays: leftProducts, rightProducts, and answer to store the products to the left, products to the right, and the final answer, respectively.

// Calculate the left products by iterating from left to right, starting with leftProducts[0] = 1. For each index i, calculate leftProducts[i] as the product of all elements to the left of i.

// Calculate the right products by iterating from right to left, starting with rightProducts[n - 1] = 1. For each index i, calculate rightProducts[i] as the product of all elements to the right of i.

// Calculate the answer by multiplying the corresponding leftProducts and rightProducts for each element and store the result in the answer array.

// Return the answer array, which contains the product of all elements except nums[i].

// In the examples you provided, the function will return the expected results:

// For nums = [1, 2, 3, 4], the output will be [24, 12, 8, 6].
// For nums = [-1, 1, 0, -3, 3], the output will be [0, 0, 9, 0, 0].

function productExceptSelf(nums) {
    const n = nums.length;
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    const answer = new Array(n);

    // Calculate left products
    leftProducts[0] = 1;
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    // Calculate right products
    rightProducts[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    // Calculate the answer
    for (let i = 0; i < n; i++) {
        answer[i] = leftProducts[i] * rightProducts[i];
    }

    return answer;
}