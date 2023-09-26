var RandomizedSet = function() {
    this.valToIndex = new Map(); // A Map to store values and their indices.
    this.values = []; // An array to store values.
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valToIndex.has(val)) {
        return false; // Value already exists.
    }
    this.valToIndex.set(val, this.values.length);
    this.values.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.valToIndex.has(val)) {
        // Swap the value to remove with the last value in the array and update its index.
        const indexToRemove = this.valToIndex.get(val);
        const lastValue = this.values[this.values.length - 1];
        this.values[indexToRemove] = lastValue;
        this.valToIndex.set(lastValue, indexToRemove);
        this.values.pop();
        this.valToIndex.delete(val);
        return true;
    }
    return false; // Value not found.
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
};