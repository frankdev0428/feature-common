// Convert the input string s to lowercase using the toLowerCase method.

// Remove all non-alphanumeric characters using the replace method with a regular expression [^a-z0-9] to match any character that is not a lowercase letter or a number. This regular expression replaces such characters with an empty string.

// The cleaned string is then compared to its reverse. If the cleaned string is equal to its reverse, it is a palindrome, and the function returns true; otherwise, it returns false.

// For the examples you provided:

// For s = "A man, a plan, a canal: Panama", the output will be true because the cleaned string "amanaplanacanalpanama" is a palindrome.

// For s = "race a car", the output will be false because the cleaned string "raceacar" is not a palindrome.

// For s = " ", the output will be true because an empty string, after removing non-alphanumeric characters, reads the same forward and backward, making it a palindrome.

function isPalindrome(s) {
    //convert to lowercase and remove non-alphanumeric characters
    const cleanedString = s.lowerCase().replace(/[^a-z0-9]/g, '');
    //check if the cleaned string is equal to its reverse
    return cleanedString === cleanedString.split('').reverse().join('');
}