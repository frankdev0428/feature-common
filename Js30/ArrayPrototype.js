

Array.prototype.last = function() {
    if(this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
}

///Example usage:
const nums1 = [null, {} ,3];
const nums2 = [];

console.log(nums1.last()); //Output: 3
console.log(nums2.last()); // output: -1