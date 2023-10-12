// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function removeNthFromEnd(head, n) {
  let temp = head;
  let len = 0;
  while (temp) {
    len++;
    temp = temp.next;
  }

  let prev = null;
  let nthNode = head;
  let idx = 0;
  while (idx < len - n) {
    prev = nthNode;
    nthNode = nthNode.next;
    idx++;
  }

  if (len == 1) {
    return null;
  }

  if (idx == 0) {
    let temp = nthNode.next;
    nthNode.next = null;
    return temp;
  }

  prev.next = nthNode.next;
  return head;
}
