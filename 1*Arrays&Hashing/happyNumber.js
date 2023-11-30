function isHappy(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquaredDigits(n);
    }

    return n === 1;
}

function sumOfSquaredDigits(num) {
    let sum = 0;

    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }

    return sum;
}
