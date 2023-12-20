

function maxDepth(root) {
    if (!root) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example 1
const root1 = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};
console.log(maxDepth(root1)); // Output: 3

// Example 2
const root2 = {
    val: 1,
    left: null,
    right: { val: 2, left: null, right: null }
};
console.log(maxDepth(root2)); // Output: 2
