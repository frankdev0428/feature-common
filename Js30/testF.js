var expect = function (val) {
    return {
        toBe: (value) => {
            if (value === val) {
                return true;
            } else {
                throw new Error('Not Equal');
            }
        },
        notToBe: (value) => {
            if (value !== val) {
                return true;
            } else {
                throw new Error('Equal');
            }
        }
    };
};