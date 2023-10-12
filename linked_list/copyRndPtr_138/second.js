// 138. Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/

function copyRandomList(head) {
  if (!head) return null;

  let oldToCopy = new Map();
  let curr = head;
  // create copy of list without connecting ptrs
  // creates hashmap mapping old nodes to copy nodes
  while (curr) {
    oldToCopy.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  // evil magic hashmapping to connect pointers of copy
  curr = head;
  while (curr) {
    let copy = oldToCopy.get(curr);
    copy.next = oldToCopy.get(curr.next) || null;
    copy.random = oldToCopy.get(curr.random) || null;
    curr = curr.next;
  }
  return oldToCopy.get(head);
}
