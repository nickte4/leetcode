// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

// runtime: O(n)
// space: O(1)

// returns if char is alphanumeric
function isAlphaNum(char) {
  return (
    (char.charCodeAt(0) >= "A".charCodeAt(0) &&
      char.charCodeAt(0) <= "Z".charCodeAt(0)) ||
    (char.charCodeAt(0) >= "a".charCodeAt(0) &&
      char.charCodeAt(0) <= "z".charCodeAt(0)) ||
    (char.charCodeAt(0) >= "0".charCodeAt(0) &&
      char.charCodeAt(0) <= "9".charCodeAt(0))
  );
}

function isPalindrome(s) {
  let l = 0; // left ptr
  let r = s.length - 1; // right ptr
  while (l < r) {
    while (l < r && !isAlphaNum(s[l])) {
      l++;
    }
    while (r > l && !isAlphaNum(s[r])) {
      r--;
    }
    if (s[l].toLowerCase() != s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
