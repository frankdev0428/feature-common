function insertInterval(intervals, newInterval) {
    const result = [];
    let i = 0;

    // Add all intervals that come before the newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // Add remaining intervals after the newInterval
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// Test cases
console.log(insertInterval([[1, 3], [6, 9]], [2, 5])); // Output: [[1,5],[6,9]]
console.log(insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // Output: [[1,2],[3,10],[12,16]]
