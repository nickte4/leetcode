// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/

/*
    runtime: O(n), space: O(n)
    DFS approach
*/
function invertTree(root) {
  if (!root) return root; // base case
  // invert children
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  // swap children
  root.left = right;
  root.right = left;
  return root;
}
