// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

// runtime: O(nlogn), space: O(n) where n is # elements in nums
// comparator function is needed for sort
// in code, arrow function b[1] - a[1] will access the idx 1
// of each entry (value) and sort it by descending order

function topKFrequent(nums, k) {
  let freqMap = new Map();
  // make a hashmap of (number, num occurences)
  for (let i = 0; i < nums.length; i++) {
    if (freqMap.has(nums[i])) {
      freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
    } else {
      freqMap.set(nums[i], 1);
    }
  }
  // create array from map entries then sort by value
  let entryArr = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(entryArr[i][0]); // grab the key from each entries
  }
  return ans;
}
