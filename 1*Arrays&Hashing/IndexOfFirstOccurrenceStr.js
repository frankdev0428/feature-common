// We first check if the needle is an empty string. If it is, we return 0 because an empty string is always found at the beginning of any string.

// We use the indexOf method on the haystack to search for the first occurrence of the needle within it.

// The indexOf method returns the index of the first occurrence of needle in haystack. If needle is not found, it returns -1.

// We return the index as the result, which will be either the index of the first occurrence of needle or -1 if needle is not found in haystack.

// For the examples you provided:

// For haystack = "sadbutsad" and needle = "sad", the output will be 0 because "sad" occurs at index 0 and 6, and the first occurrence is at index 0.

// For haystack = "leetcode" and needle = "leeto", the output will be -1 because "leeto" is not found in "leetcode," so we return -1.

function strStr(haystack, needle) {
    if (needle === '') {
      return 0; // An empty needle is always present at the beginning.
    }
    const index = haystack.indexOf(needle);

    return index;
}
