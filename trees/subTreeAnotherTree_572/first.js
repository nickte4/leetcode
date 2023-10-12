/*
    time: O(r * s), r root nodes, s subtree nodes
    space: O(n), recursive algorithm
*/
function isSubtree(root, subRoot) {
  // check if root is empty
  if (!root) return false;
  // check if root and subroot are equal
  if (isSameTree(root, subRoot)) return true;
  // check for subtrees in left and right trees of root
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(one, two) {
  // check if both trees are empty
  if (!one && !two) return true;
  // check if one of them is empty and the other isn't
  if (!one || !two || one.val != two.val) return false;
  // recursively check subtrees of both trees
  return isSameTree(one.left, two.left) && isSameTree(one.right, two.right);
}
