// 138. Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/

/* 
    runtime: O(n^2), space: O(1) without output, O(n) with output
    Brute force solution, iterate over original list keeping an
    idx of random node then translating that to the copy list.
    Worst case is all random ptrs pointing to end of list meaning
    iteration over list once for each node.
*/
function copyRandomList(head) {
  let temp = head;
  let dummy = {
    val: -1,
    next: null,
    random: null,
  };
  // create copy of list without rnd ptrs
  let tail = dummy;
  while (temp) {
    tail.next = {
      val: temp.val,
      next: null,
      random: null,
    };
    tail = tail.next;
    temp = temp.next;
  }

  // iterate over list again to get rnd ptrs
  temp = head;
  let idxPtr = head;
  let idxOfRnd = 0;
  let copyRnd = dummy.next;
  let copyTemp = dummy.next;
  while (temp) {
    if (temp.random) {
      while (idxPtr !== temp.random) {
        idxPtr = idxPtr.next;
        idxOfRnd++;
      }
      while (idxOfRnd > 0) {
        copyRnd = copyRnd.next;
        idxOfRnd--;
      }
      copyTemp.random = copyRnd;
    }
    temp = temp.next;
    idxPtr = head;
    copyTemp = copyTemp.next;
    copyRnd = dummy.next;
  }
  return dummy.next;
}
