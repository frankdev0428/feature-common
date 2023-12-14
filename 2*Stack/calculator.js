function calculate(s) {
    const stack = [];
    let result = 0;
    let num = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        
        if (!isNaN(parseInt(char))) {
            num = num * 10 + parseInt(char);
        } else if (char === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        } else if (char === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }

    return result + (sign * num);
}
