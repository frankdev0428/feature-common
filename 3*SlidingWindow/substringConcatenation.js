function findSubstring(s, words) {
    if (s.length === 0 || words.length === 0) return [];

    const wordCount = {};
    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const result = [];

    for (const word of words) {
        if (!(word in wordCount)) {
            wordCount[word] = 0;
        }
        wordCount[word]++;
    }

    for (let i = 0; i <= s.length - totalLength; i++) {
        const seenWords = {};
        let j = 0;

        while (j < words.length) {
            const currentWord = s.substr(i + j * wordLength, wordLength);

            if (!(currentWord in wordCount)) {
                break;
            }

            if (!(currentWord in seenWords)) {
                seenWords[currentWord] = 0;
            }
            seenWords[currentWord]++;

            if (seenWords[currentWord] > wordCount[currentWord]) {
                break;
            }

            j++;
        }

        if (j === words.length) {
            result.push(i);
        }
    }

    return result;
}

// Test cases
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // Output: [0, 9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])); // Output: []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // Output: [6, 9, 12]
