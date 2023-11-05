Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
};

// Example usage:
const nums = [null, {}, 3];
const result = nums.last(); // It will return 3

const emptyArray = [];
const emptyResult = emptyArray.last(); // It will return -1
