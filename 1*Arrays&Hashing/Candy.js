// Initialize an array candies of the same length as the ratings array, filled with 1. This ensures that each child gets at least one candy.

// First, iterate through the ratings from left to right and adjust the candies array to satisfy the condition that children with higher ratings get more candies than their neighbors.

// Then, iterate through the ratings from right to left and adjust the candies array again to make sure children with higher ratings in this pass get more candies than their neighbors, without changing the candies assigned in the first pass.

// Calculate the sum of the candies array, which represents the minimum number of candies needed.

function minCandies(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1); // Initialize candies array with all 1s

    // First pass: Adjust from left to right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Second pass: Adjust from right to left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Calculate the sum of candies
    const totalCandies = candies.reduce((sum, current) => sum + current, 0);

    return totalCandies;
}

