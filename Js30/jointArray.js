function mergeArrays(arr1, arr2) {
    const mergedArray = [];

    // Create a map to keep track of objects by their id
    const idMap = new Map();

    // Add objects from arr1 to mergedArray
    for (const obj of arr1) {
        const id = obj.id;

        if (idMap.has(id)) {
            // Merge properties if the id already exists
            Object.assign(idMap.get(id), obj);
        } else {
            idMap.set(id, obj);
        }
    }

    // Add objects from arr2 to mergedArray
    for (const obj of arr2) {
        const id = obj.id;

        if (idMap.has(id)) {
            // Merge properties if the id already exists
            Object.assign(idMap.get(id), obj);
        } else {
            idMap.set(id, obj);
        }
    }

    // Convert the map values back to an array
    for (const value of idMap.values()) {
        mergedArray.push(value);
    }

    // Sort the mergedArray by id in ascending order
    mergedArray.sort((a, b) => a.id - b.id);

    return mergedArray;
}

// Example 1:
const arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];

const arr2 = [
    {"id": 3, "x": 5}
];

const joinedArray1 = mergeArrays(arr1, arr2);
console.log(joinedArray1);

// Example 2:
const arr3 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
];

const arr4 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
];

const joinedArray2 = mergeArrays(arr3, arr4);
console.log(joinedArray2);
