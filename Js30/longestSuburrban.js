function lengthOfLongestSubstring(s) {
    let charIndexMap = {};
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] in charIndexMap) {
            left = Math.max(left, charIndexMap[s[right]] + 1);
        }

        charIndexMap[s[right]] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
