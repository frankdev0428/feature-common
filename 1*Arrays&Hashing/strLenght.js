// Use s.trim() to remove leading and trailing spaces from the input string s. This ensures that we don't count leading or trailing spaces as words.

// Split the trimmed string by spaces using s.split(' '). This will create an array of words in the string.

// Check if the array of words is empty. If it is, return 0 because there are no words in the string.

// Return the length of the last word in the array, which is words[words.length - 1].

// In the examples you provided:

// For s = "Hello World", the output will be 5 because the last word is "World" with a length of 5.
// For s = " fly me to the moon ", the output will be 4 because the last word is "moon" with a length of 4.
// For s = "luffy is still joyboy", the output will be 6 because the last word is "joyboy" with a length of 6.

function lengthOfLastWord(s) {
    const words = s.trim().split(' ');
    if ( words.length === 0) {
        return 0;
    }
    return words[words.length - 1].length
}