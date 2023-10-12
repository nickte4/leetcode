// 49. group anagrams
// https://leetcode.com/problems/group-anagrams/

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

function groupAnagrams(strs) {
  let usedIndexes = new Set();
  let arrOfAnagrams = [];
  while (usedIndexes.size != strs.length) {
    let currArr = [];
    let i = 0;
    while (usedIndexes.has(i) && i < strs.length) {
      i++;
    }
    usedIndexes.add(i);
    let temp = strs[i];
    currArr.push(temp);
    for (let j = i; j < strs.length; j++) {
      if (!usedIndexes.has(j)) {
        if (isAnagram(temp, strs[j])) {
          currArr.push(strs[j]);
          usedIndexes.add(j);
        }
      }
    }
    arrOfAnagrams.push(currArr);
  }
  return arrOfAnagrams;
}

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(arr));
