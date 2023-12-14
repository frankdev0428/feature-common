

function evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (!isNaN(parseInt(token))) {
            stack.push(parseInt(token));
        } else {
            const num2 = stack.pop();
            const num1 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(num1 + num2);
                    break;
                case '-':
                    stack.push(num1 - num2);
                    break;
                case '*':
                    stack.push(num1 * num2);
                    break;
                case '/':
                    stack.push(parseInt(num1 / num2)); // Division truncates towards zero
                    break;
            }
        }
    }

    return stack.pop();
}
