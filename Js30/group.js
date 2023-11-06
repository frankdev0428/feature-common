const grouped = {};

this.forEach((item) => {
    const key = fn(item);
    if (!grouped[key]) {
        grouped[key] = [];
    }
    grouped[key].push(item);
});

return grouped;
};

// Example usage:
const array1 = [
{"id": "1"},
{"id": "1"},
{"id": "2"}
];

const fn1 = function(item) {
return item.id;