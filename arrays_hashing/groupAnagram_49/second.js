// 49. group anagrams
// https://leetcode.com/problems/group-anagrams/

// strings s, t
function groupAnagrams(strs) {
  let anagramMap = new Map();
  let ans = [];
  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split("").sort().join("");
    if (anagramMap.has(temp)) {
      anagramMap.set(temp, anagramMap.get(temp) + "," + strs[i]);
    } else {
      anagramMap.set(temp, strs[i]);
    }
  }

  for (let val of anagramMap.values()) {
    ans.push(val.split(","));
  }
  return ans;
}

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(arr));
