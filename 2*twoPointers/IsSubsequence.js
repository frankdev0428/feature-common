// sIndex and tIndex are used to keep track of the current character being compared in strings s and t, respectively.
// We iterate through both strings, comparing the characters at the current indices.
// If there's a match, we increment the sIndex to check the next character in s.
// After the loop, we check if we successfully iterated through all characters in s by comparing sIndex to the length of s.



function isSubsequence(s, t) {
    let sIndex = 0;
    let tIndex = 0;

    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }
        tIndex++;
    }

    return sIndex === s.length;
}

// Example usage:

console.log(isSubsequence("abc", "ahbgdc")); // Output: true
console.log(isSubsequence("axc", "ahbgdc")); // Output: false
