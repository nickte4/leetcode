// 143. Reorder List
// https://leetcode.com/problems/reorder-list/

function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev; // head stored in prev
}

// gets ptr to 2nd half of list
function get2ndHalfOfList(head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let headOf2ndHalf = slow.next;
  slow.next = null; // severs the list into two separate halves
  return headOf2ndHalf;
}

function reorderList(head) {
  let otherHalf = get2ndHalfOfList(head);
  let reversedHalf = reverseList(otherHalf);
  let front = head;
  let end = reversedHalf;
  while (end) {
    let frontNext = front.next;
    let endNext = end.next;
    front.next = end;
    end.next = frontNext;
    front = frontNext;
    end = endNext;
  }
}
