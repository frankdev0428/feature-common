// Initialize startStation to 0, representing the starting station.
// Initialize totalGas and totalCost to track the total gas available and total cost of travel.
// Initialize currentGas and currentCost to track the running sum of gas and cost.
// Iterate through the gas stations while updating the running sums of gas and cost, as well as the total gas and total cost.
// If the running sum of gas becomes negative at any point, reset both running sums and update the starting station to the next station.
// After the loop, if the net running sum of gas (totalGas - totalCost) is non-negative, return the starting station as a valid solution.
// If no valid solution exists, return -1.


function canCompleteCircuit(gas, cost) {
    let startStation = 0; // Start at the first station
    let totalGas = 0; // Total gas available
    let totalCost = 0; // Total cost of travel

    let currentGas = 0; // Running sum of gas
    let currentCost = 0; // Running sum of cost

    for (let i = 0; i < gas.length; i++) {
        currentGas += gas[i];
        currentCost += cost[i];
        totalGas += gas[i];
        totalCost += cost[i];

        // If the current running sum of gas is negative, reset at the next station
        if (currentGas < currentCost) {
            currentGas = 0;
            currentCost = 0;
            startStation = i + 1;
        }
    }

    // If the net running sum of gas is non-negative, return the starting station
    if (totalGas >= totalCost) {
        return startStation;
    }

    return -1; // No solution exists
}