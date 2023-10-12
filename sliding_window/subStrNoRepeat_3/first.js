// 3. Longest Substring without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
  let seenChars = new Set();
  let start = 0;
  let result = 0;
  for (let end = 0; end < s.length; end++) {
    while (seenChars.has(s[end])) {
      seenChars.delete(s[start]);
      start++;
    }
    seenChars.add(s[end]);
    result = Math.max(result, end - start + 1);
  }
  return result;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
