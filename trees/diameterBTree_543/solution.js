// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/

/*
    runtime: O(n), space: O(n)
*/
function diameterOfBinaryTree(root) {
  let result = [0];
  function dfs(root, result) {
    if (!root) return -1;
    let left = dfs(root.left);
    let right = dfs(root.right);
    let result = Math.max(result[0], 2 + left + right);
    return 1 + Math.max(left, right);
  }
  dfs(root, result);
  return result[0];
}
