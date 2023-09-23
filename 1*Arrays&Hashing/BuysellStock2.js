// Initialize maxProfit to 0.

// Iterate through the prices array, starting from the second day.

// For each day, check if the price is higher than the previous day's price. If it is, add the difference to maxProfit, as this represents a profitable transaction.

// Finally, return maxProfit, which represents the maximum profit achievable.

// This approach leverages the fact that you can buy and sell on the same day if it leads to a profit. It calculates the total profit by adding up all the positive differences between consecutive days' prices.

function maxProfit(prices) {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            // If the price increased from the previous day, add the profit
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
}