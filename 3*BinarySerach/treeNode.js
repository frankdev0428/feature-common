
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    const rootIndex = inorder.indexOf(rootVal);

    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));

    return root;
}

// Example 1
const preorder1 = [3, 9, 20, 15, 7];
const inorder1 = [9, 3, 15, 20, 7];
const tree1 = buildTree(preorder1, inorder1);
console.log(tree1); // Output: [3,9,20,null,null,15,7]

// Example 2
const preorder2 = [-1];
const inorder2 = [-1];
const tree2 = buildTree(preorder2, inorder2);
console.log(tree2); // Output: [-1]

