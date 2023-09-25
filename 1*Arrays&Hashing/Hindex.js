// Sort the citations array in descending order using the sort method with a custom comparator function. This way, the papers with the highest number of citations will be at the beginning of the array.

// Initialize h to 0, which will represent the h-index.

// Iterate through the sorted citations array. For each paper with citations[i], check if citations[i] is greater than or equal to i + 1 (the number of papers with at least i + 1 citations). If it is, update h to i + 1.

// Continue this loop until you find the maximum h for which the condition holds true.

// Finally, return the h value, which is the h-index of the researcher.

// In the example you provided, for the input [3, 0, 6, 1, 5], the function will return 3, as the researcher has three papers with at least three citations each.

function hIndex(citations) {
    citations.sort((a, b) => b - a); // Sort in descending order

    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }

    return h;
}