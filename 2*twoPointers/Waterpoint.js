function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const hLeft = height[left];
        const hRight = height[right];
        const width = right - left;
        const minHeight = Math.min(hLeft, hRight);
        const water = width * minHeight;
        maxWater = Math.max(maxWater, water);

        if (hLeft < hRight) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(height);
console.log(result);  // Output: 49