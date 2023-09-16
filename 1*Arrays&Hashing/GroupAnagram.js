const groupAnagrams = (sts) => {
  // Initialize an empty object to act as a hash map.
  const hashStr = {};
// Loop through each string in the input array strs.
for (const str of sts) {
// For each string, convert it into an array of characters, sort the characters, and then join them back into a string. This sorted 
//string will serve as the key in the hash map.
   const sortStr = str.split('').sort().join('');
// Check if the sorted string exists as a key in the hash map:
  if (hashStr[sortStr]){
    hashStr[sortStr].push(str)
  } else {
    hashStr[sortStr] = [str];
  }
}
   const result  = Object.values(hashStr);
   return result;

// If it exists, push the original string into the array associated with that key.
// If it doesn't exist, create a new key in the hash map with the sorted string and initialize it with an array containing the original string.
// After processing all strings, you can extract the values (arrays of anagrams) from the hash map to form the result.
}



