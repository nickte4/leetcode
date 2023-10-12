// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
function addTwoNumbers(l1, l2) {
  let dummy = { val: -1, next: null };
  let curr = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    let digit1 = l1 ? l1.val : 0;
    let digit2 = l2 ? l2.val : 0;
    // new digit
    let val = digit1 + digit2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    let node = { val: val, next: null };
    curr.next = node;
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
}
