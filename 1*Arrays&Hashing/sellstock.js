// We start by checking if the prices array is empty. If it's empty, there are no transactions possible, so we return 0 as the maximum profit.

// We initialize two variables:

// minPrice: This variable represents the minimum price seen so far while iterating through the prices array. We initialize it to the price on the first day (prices[0]).
// maxProfit: This variable represents the maximum profit that can be achieved. We initialize it to 0 because initially, we have no profit.
// We then loop through the prices array using a for loop, starting from the first day (index 0) and going through each day's price.

// Inside the loop, we perform the following steps for each day's price (price):

// Update minPrice: We use Math.min to update minPrice with the minimum value between the current minPrice and the current day's price. This ensures that minPrice always holds the lowest price encountered so far.
// Calculate potentialProfit: This variable calculates the potential profit if you were to sell at the current day's price. It's calculated as the difference between the current day's price (price) and the minimum price seen so far (minPrice).
// Update maxProfit: We use Math.max to update maxProfit with the maximum value between the current maxProfit and the potentialProfit. This ensures that maxProfit always holds the maximum profit encountered so far.
// After the loop finishes, we return the final value of maxProfit, which represents the maximum profit achievable by buying and selling the stock once.

// In summary, this JavaScript code efficiently finds the maximum profit by keeping track of the minimum price and calculating potential profits as it iterates through the prices array. The final result in maxProfit is the maximum profit you can achieve from buying and selling a stock once.

function maxProfit(prices) {
    if (prices.length === 0) {
        return 0;
    }
    
    let minPrice = prices[0];  // Initialize the minimum price to the first day's price
    let maxProfit = 0;  // Initialize the maximum profit to 0
    
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        
        // Update the minimum price if a lower price is encountered
        minPrice = Math.min(minPrice, price);
        
        // Calculate the potential profit if you sell at the current day's price
        const potentialProfit = price - minPrice;
        
        // Update the maximum profit if the potential profit is greater
        maxProfit = Math.max(maxProfit, potentialProfit);
    }
    
    return maxProfit;
}