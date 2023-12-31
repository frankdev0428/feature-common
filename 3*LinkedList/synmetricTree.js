class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function isSymmetric(root) {
    function isMirror(left, right) {
      if (!left && !right) {
        return true;
      }
      if (!left || !right) {
        return false;
      }
      
      return (
        left.val === right.val &&
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left)
      );
    }
  
    if (!root) {
      return true;
    }
    
    return isMirror(root.left, root.right);
  }
  
  // Test cases
  // Example 1
  let root1 = new TreeNode(1);
  root1.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
  root1.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));
  console.log(isSymmetric(root1)); // Output: true
  
  // Example 2
  let root2 = new TreeNode(1);
  root2.left = new TreeNode(2, null, new TreeNode(3));
  root2.right = new TreeNode(2, null, new TreeNode(3));
  console.log(isSymmetric(root2)); // Output: false
  