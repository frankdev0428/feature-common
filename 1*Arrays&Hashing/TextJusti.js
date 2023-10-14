

function fullJustify(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (const word of words) {
        if (lineLength + line.length + word.length > maxWidth) {
            const spaces = maxWidth - lineLength;
            let spacesBetweenWords = line.length > 1 ? Math.floor(spaces / (line.length - 1)) : spaces;
            let extraSpaces = spaces - spacesBetweenWords * (line.length - 1);

            let lineStr = '';
            for (let i = 0; i < line.length; i++) {
                lineStr += line[i];
                if (i < line.length - 1) {
                    lineStr += ' '.repeat(spacesBetweenWords + (i < extraSpaces ? 1 : 0));
                }
            }

            result.push(lineStr);
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