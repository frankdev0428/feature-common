

function isSameTree(p, q) {
    // If both trees are null, they are identical
    if (!p && !q) {
        return true;
    }
    
    // If one of the trees is null or their values don't match, they are not identical
    if (!p || !q || p.val !== q.val) {
        return false;
    }
    
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Example 1
const p1 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
};
const q1 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
};
console.log(isSameTree(p1, q1)); // Output: true

// Example 2
const p2 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null
};
const q2 = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null }
};
console.log(isSameTree(p2, q2)); // Output: false
