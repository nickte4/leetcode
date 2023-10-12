// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function removeNthNodeFromEnd(head, n) {
  let dummy = {
    val: -1,
    next: head,
  };
  let left = dummy;
  let right = head;
  while (n > 0 && right) {
    right = right.next;
    n--;
  }
  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;
  return dummy.next;
}
