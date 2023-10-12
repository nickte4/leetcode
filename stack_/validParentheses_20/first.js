// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

/*
    runtime: O(n), space: O(n)
    utilizes a stack (in the form of JS arrayList) and hashmap
*/
function isValid(s) {
  const pValues = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let pMap = new Map(Object.entries(pValues));
  let ptheses = [];
  for (let c of s) {
    if (pMap.has(c)) {
      if (ptheses.length > 0 && ptheses[ptheses.length - 1] == pMap.get(c)) {
        ptheses.pop();
      } else {
        return false;
      }
    } else {
      ptheses.push(c);
    }
  }

  return ptheses.length == 0 ? true : false;
}

console.log(isValid("()"));
