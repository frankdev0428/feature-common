function compactObject(obj) {
    if (Array.isArray(obj)) {
        // If obj is an array, filter out falsy values and compact nested elements.
        return obj
            .filter(item => Boolean(item))
            .map(item => compactObject(item));
    } else if (typeof obj === 'object' && obj !== null) {
        // If obj is an object, create a new object with compacted properties.
        const compactedObj = {};
        for (const key in obj) {
            const value = compactObject(obj[key]);
            if (Boolean(value)) {
                compactedObj[key] = value;
            }
        }
        return compactedObj;
    }
    return obj;
}

// Example:
const obj = [null, 0, false, 1];
const compactedObj = compactObject(obj);
console.log(compactedObj); // Output: [1]
