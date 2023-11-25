function canConstruct(ransomNote, magazine) {
    const charCount = {};

    // Count occurrences of characters in magazine
    for (const char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Decrement counts for characters in ransomNote
    for (const char of ransomNote) {
        if (!charCount[char]) {
            return false; // Character not available in magazine
        }
        charCount[char]--;
    }

    return true;
}
