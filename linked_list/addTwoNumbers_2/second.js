// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

function createNumFromList(head) {
  let num = 0;
  let multiply = 1;
  let temp = head;
  while (temp) {
    let digit = temp.val;
    num = digit * multiply + num;
    multiply *= 10;
    temp = temp.next;
  }
  return num;
}

function createListFromNum(num) {
  let dummy = {
    val: -1,
    next: null,
  };
  let temp = dummy;

  if (num == 0) {
    temp.next = {
      val: 0,
      next: null,
    };
  }

  while (num != 0) {
    let node = {
      val: num % 10,
      next: null,
    };
    num = Math.floor(num / 10);
    temp.next = node;
    temp = node;
  }

  return dummy.next;
}

function addTwoNumbers(l1, l2) {
  let num1 = createNumFromList(l1);
  let num2 = createNumFromList(l2);
  return createListFromNum(num1 + num2);
}
