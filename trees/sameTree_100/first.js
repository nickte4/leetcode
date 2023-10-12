/*
    time: O(p + q), p nodes + q nodes
    space: O(n), recursion used
*/
function isSameTree(p, q) {
  // check if both are empty
  if (!p && !q) {
    return true;
  }
  // check if one is empty, and the other isn't
  // AND check if the root values are equal
  if (!p || !q || p.val != q.val) {
    return false;
  }
  // check if left and right subtrees are equal
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
