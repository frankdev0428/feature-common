

function summaryRanges(nums) {
    if (nums.length === 0) return [];

    const result = [];
    let start = nums[0];
    let end = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === end + 1) {
            end = nums[i];
        } else {
            result.push(start === end ? `${start}` : `${start}->${end}`);
            start = end = nums[i];
        }
    }

    result.push(start === end ? `${start}` : `${start}->${end}`);
    return result;
}

// Test cases
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // Output: ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // Output: ["0","2->4","6","8->9"]
