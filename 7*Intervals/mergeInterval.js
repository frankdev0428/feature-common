function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const currInterval = intervals[i];
        const lastMerged = merged[merged.length - 1];

        if (currInterval[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(currInterval[1], lastMerged[1]);
        } else {
            merged.push(currInterval);
        }
    }

    return merged;
}

// Test cases
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // Output: [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // Output: [[1,5]]
