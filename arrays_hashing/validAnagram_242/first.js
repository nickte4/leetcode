// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

function isAnagram(s, t) {
  let charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      let val = charMap.get(s[i]);
      charMap.set(s[i], val + 1);
    } else {
      charMap.set(s[i], 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (charMap.has(t[j])) {
      let val = charMap.get(t[j]);
      if (val - 1 < 0) {
        return false;
      } else {
        charMap.set(t[j], val - 1);
      }
    } else {
      return false;
    }
  }

  for (let [key, value] of charMap) {
    if (value > 0) {
      return false;
    }
  }
  return true;
}
