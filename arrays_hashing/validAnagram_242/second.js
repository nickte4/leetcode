// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

// strings s, t
function isAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }
  let charCount = new Array(26).fill(0);

  // '97' is the char code of 'a', this allows us to confine the characters in a string to a range of 0 - 25
  // when subtracting their char code by 97
  for (let i = 0; i < s.length; i++) {
    charCount[s.charCodeAt(i) - 97]++;
  }

  for (let j = 0; j < t.length; j++) {
    charCount[t.charCodeAt(j) - 97]--;
  }

  for (let idx = 0; idx < charCount.length; idx++) {
    if (charCount[idx] != 0) {
      return false;
    }
  }
  return true;
}
