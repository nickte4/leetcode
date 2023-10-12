// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
import Queue from "../../../data_structures/stack_queue/class/queue.js";
import Stack from "../../../data_structures/stack_queue/class/stack.js";

/*
    runtime: O(n), space: O(n)
    recursive DFS
*/
function maxDepth(root) {
  if (!root) return 0;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

/*
    runtime: O(n), space: O(n)
    BFS
*/
function maxDepth(root) {
  if (!root) return 0;
  let level = 0;
  let nodeQueue = new Queue(root);
  while (nodeQueue.length > 0) {
    for (let i = 0; i < nodeQueue.length; i++) {
      let node = nodeQueue.dequeue();
      if (node.left) nodeQueue.enqueue(node.left);
      if (node.right) nodeQueue.enqueue(node.right);
    }
    level++;
  }
  return level;
}

/* 
    runtime: O(n), space: O(n)
    iterative DFS
*/
function maxDepth(root) {
  let nodeStack = new Stack([root, 1]);
  let result = 0;
  while (nodeStack.length > 0) {
    let [node, depth] = nodeStack.pop();
    if (node) {
      result = Math.max(result, depth);
      nodeStack.push([node.left, depth + 1]);
      nodeStack.push([node.right, depth + 1]);
    }
  }
  return result;
}
