// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

function mergeTwoLists(list1, list2) {
  let dummy = {
    val: -1,
    next: null,
  };
  let tail = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }

  return dummy.next;
}
