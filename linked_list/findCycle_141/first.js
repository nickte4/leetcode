// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

/*
    Runtime: O(n), space(1) where n is number of nodes in LL
    Uses slow and fast ptrs.
*/
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
