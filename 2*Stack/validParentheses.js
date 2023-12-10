

function isValid(s) {
    const stack = [];
    const map = {
        ')' : '(',
        ')' : '(',
        ']' : '['
    };
  for (let i = 0 ; i < s.length; i++){
    const char = s.charAt(i);
    if (char === '(' || char === '{' || char === '['){
        stack.push(char);
    } else {
        const top = stack.pop();
        if( map[char] !== top) {
            return false;
        }
    }
  }
   return stack.length === 0;
}