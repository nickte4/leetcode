// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

/*
    runtime: O(n), space: O(1)
    sliding window, uses a max frequency to avoid iterating over
    charCount.values() to check for most popular char.
*/
function characterReplacement(s, k) {
  let charCount = new Map();
  let result = 0; // best length of substring
  let l = 0;
  let maxF = 0;

  for (let r = 0; r < s.length; r++) {
    let len = r - l + 1;
    charCount.set(s[r], 1 + (charCount.get(s[r]) || 0));
    maxF = Math.max(maxF, charCount.get(s[r]));

    if (len - maxF > k) {
      charCount.set(s[l], charCount.get(s[l]) - 1);
      l++;
    }
    len = r - l + 1;
    result = Math.max(result, len);
  }
  return result;
}

console.log(characterReplacement("AABABBA", 1));
