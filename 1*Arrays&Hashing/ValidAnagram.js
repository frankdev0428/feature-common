// checking the length of the two input strings, `s` and `t` are different .If they have different lengths, they cannot be anagrams, so it return `false`
// it then creates an array of length 26(for lowercase English letters) and initializes  all elements to 0. This array will be used to keep track of the frequency of each character in string `s`.
// the function interates through the characters of string `s` . For each character , it increments the corresponding element in the `charCount` array based on its ASCII value.
//Next the function interates through the characters of string `t`. For each character ,it decrement the corresponding element in the array . If it encoumters a character with a negative count , it means that `t` contains a character not present in `s`, so it returns `false`.
// Finally , after both loops ,it checks if all elments in the array are zero. If they arem its means that`t` is an anagram of `s`, and it reutrns `true`.

//this solution has a time complexity of O(n), where n is the length of the input strings `s` and `t` , making it an efficient solutions this problem

const str = "Random string generator ";
const charCode = string.charCode(0);

function isAna(s,t) {
    if(s.length !== t.length){
        return false;
    }
  const charCount = new Array(26).fill(0);
  for (let i = 0;i < s.length ; i++){
    charCount[ s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0;i < t.length;i++) {
    charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    if (charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)] < 0 ){
        return false;
      }
}
  return true;
}
