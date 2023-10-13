// Initialize an array result to store the lines of text and line to store the words for the current line.

// Iterate through the words one by one, adding them to the current line as long as the total length (lineLength) plus the length of the new word and the number of words in the line do not exceed maxWidth.

// When the current line is full, distribute the extra spaces evenly between the words, and push the line to the result array.

// After processing all words, add spaces to the last line to make it left-justified, and push it to the result array.

// Return the result array containing the formatted lines.

// For the examples you provided:

// For words = ["This", "is", "an", "example", "of", "text", "justification."] and maxWidth = 16, the output will be as described.

// For words = ["What","must","be","acknowledgment","shall","be"] and maxWidth = 16, the output will be as described.


function fullJustify(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (let word of words) {
        if (lineLength + line.length + word.length > maxWidth) {
            for (let i = 0; i < maxWidth - lineLength; i++) {
                line[i % (line.length > 1 ? line.length - 1 : 1)] += ' ';
            }
            result.push(line.join(''));
            line = [];
            lineLength = 0;
        }
        line.push(word);
        lineLength += word.length;
    }

    // Last line (left-justified)
    result.push(line.join(' ') + ' '.repeat(maxWidth - lineLength - line.length + 1));

    return result;
}