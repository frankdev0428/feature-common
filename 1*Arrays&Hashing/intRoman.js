// We define a mapping romanToInteger that associates each Roman numeral symbol with its corresponding integer value. The mapping includes cases for subtraction (e.g., 'CM' for 900, 'IV' for 4).

// We initialize an empty string result that will store the Roman numeral representation.

// We loop through the symbols in descending order (from the largest to the smallest) and their corresponding integer values.

// For each symbol, we check if the current number num is greater than or equal to the symbol's value. If it is, we add the symbol to the result and subtract its value from num. We repeat this as long as num is greater than or equal to the symbol's value.

// We continue this process for each symbol in the mapping, effectively building the Roman numeral representation.

// After the loop, result contains the Roman numeral representation of the given integer.

// For the examples you provided, the function will return the expected results:

// For num = 3, the output is "III".
// For num = 58, the output is "LVIII".
// For num = 1994, the output is "MCMXCIV".


function intToRoman(num) {
    const romanToInteger = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };

    let result = '';
    
    for (const symbol in romanToInteger) {
        const value = romanToInteger[symbol];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}
