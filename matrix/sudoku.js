function minWindow(s, t) {
    const targetCount = new Map();
    let remaining = t.length;
    let minLen = Infinity;
    let minStart = 0;
    let start = 0;
    let end = 0;

    // Count characters in string t
    for (const char of t) {
        targetCount.set(char, (targetCount.get(char) || 0) + 1);
    }

    while (end < s.length) {
        const char = s[end];
        if (targetCount.has(char)) {
            if (targetCount.get(char) > 0) {
                remaining--;
            }
            targetCount.set(char, targetCount.get(char) - 1);
        }

        while (remaining === 0) {
            if (end - start + 1 < minLen) {
                minLen = end - start + 1;
                minStart = start;
            }

            const startChar = s[start];
            if (targetCount.has(startChar)) {
                targetCount.set(startChar, targetCount.get(startChar) + 1);
                if (targetCount.get(startChar) > 0) {
                    remaining++;
                }
            }
            start++;
        }
        end++;
    }

    return minLen === Infinity ? '' : s.substr(minStart, minLen);
}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
