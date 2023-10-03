// It splits the input string s into an array of words using the space character as the separator by calling s.split(' ').

// It then filters out any empty strings from the array using the filter method with a callback that checks the length of each word (word.length > 0). This removes leading, trailing, and multiple consecutive spaces.

// Next, it reverses the array of words using the reverse method to obtain the words in the reversed order.

// Finally, it joins the reversed array into a single string using a single space as the separator by calling join(' ').

// The resulting string will have the words in reverse order, separated by a single space, and leading/trailing spaces will be removed.

// For the examples you provided:

// For s = "the sky is blue", the output will be "blue is sky the".
// For s = " hello world ", the output will be "world hello".
// For s = "a good example", the output will be "example good a".





function reverseWords(s) {
    // Split the string by spaces, filter out empty strings, reverse the array, and join with a single space.
    return s.split(' ').filter(word => word.length > 0).reverse().join(' ');
}
