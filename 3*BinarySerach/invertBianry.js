
function invertTree(root) {
    if (!root) {
        return null;
    }
    
    // Swap left and right subtrees recursively
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    
    return root;
}
// Example 1
const root1 = {
    val: 4,
    left: { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } },
    right: { val: 7, left: { val: 6, left: null, right: null }, right: { val: 9, left: null, right: null } }
};
console.log(invertTree(root1)); // Output: [4,7,2,9,6,3,1]

// Example 2
const root2 = {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null }
};
console.log(invertTree(root2)); // Output: [2,3,1]
