// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

// uses lots of memory to reverse str and replace chars in str

function reverseStr(s) {
  let strArr = [];
  for (let i = s.length - 1; i > 0; i--) {
    strArr.push(s[i]);
  }
  return strArr.join("");
}

function isPalindrome(s) {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase(); // removes non-alphanumeric chars
  if (str[0] != str[str.length - 1]) {
    return false;
  }
  let reverseStr = reverseStr(s);
  return str === reverseStr;
}
