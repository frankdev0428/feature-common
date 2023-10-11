// First, check if numRows is equal to 1. If it is, there's no change to the string, so return the original string s.

// Create an array rows to store each row of the zigzag pattern. The length of this array is the minimum of numRows and the length of the input string s.

// Initialize currentRow to 0 and a boolean variable goingDown to keep track of whether we're moving down or up the zigzag pattern.

// Iterate through each character in the input string s.

// Append the character to the current row in the rows array.

// Check if the current row is either the first row (0) or the last row (numRows - 1). If it is, change the direction from going down to going up or vice versa by toggling the goingDown variable.

// Update the currentRow based on the direction. If goingDown is true, increment currentRow by 1; otherwise, decrement it by 1.

// After processing all characters, join the rows in the rows array into a single string, which represents the zigzag pattern.

function convert(s, numRows) {
    if (numRows === 1) {
        return s; // No change for numRows = 1
    }

    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => '');
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
}
