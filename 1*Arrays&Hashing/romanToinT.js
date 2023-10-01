// We define a mapping romanToInteger that associates each Roman numeral with its corresponding integer value.

// We initialize result to 0, which will store the final integer value of the Roman numeral, and prevValue to 0 to keep track of the value of the previous Roman numeral while iterating through the string from right to left.

// We iterate through the Roman numeral string s from right to left.

// For each character in the string, we retrieve its integer value from the romanToInteger mapping.

// We compare the current value with the previous value. If the current value is less than the previous value, it means that we should subtract the current value, as it represents a case like IV (4) or IX (9). Otherwise, we add the current value to the result.

// Update prevValue to the current value for the next iteration.

// After the loop, result will contain the integer representation of the Roman numeral, and we return it.

function romanToInt(s) {
    const romanToInteger = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanToInteger[s[i]];
        
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}
