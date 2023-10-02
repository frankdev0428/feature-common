// Check if the input array strs is empty. If it is, return an empty string because there is no common prefix for an empty array.

// Iterate through the characters of the first string strs[0], as we will compare it with the corresponding characters in the other strings.

// Get the character at the current index i from the first string.

// For each of the other strings in the array (strs[1] to strs[n]), check if the current index i is out of bounds (i.e., greater than or equal to the length of the string) or if the character in the current string is different from the character in the first string. If either of these conditions is met, return the common prefix found so far by taking a substring of the first string from index 0 to i.

// If we reach the end of the loop without returning, it means the first string is the common prefix for all the strings in the array, so we return the first string.

// In the examples you provided:

// For strs = ["flower","flow","flight"], the output will be "fl" because "fl" is the longest common prefix.
// For strs = ["dog","racecar","car"], the output will be an empty string "" because there is no common prefix among the input strings.

const longestCommonPrefix = ( strs ) => {
    if ( strs.length === 0) {
        return '';
    }
    for ( let i = 0 ; i <  strs[0].length; i++) {
        const char = strs[0][i];
        for ( let j = 1 ; j < strs.length; j++ ) {
          if(i === strs[j].length || strs[j][i] !== char) {
            return strs[o].substring(0, i)
          }
        }
    }
    return strs[0];
}