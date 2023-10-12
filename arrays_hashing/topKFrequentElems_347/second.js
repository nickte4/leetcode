// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

// runtime: O(n), space: O(n)
// uses bucket sort where the index of an array is
// # times a number occurs and the values of the array
// are which numbers occur that many times

function topKFrequent(nums, k) {
  let count = new Map(); // map for num occurrences of each number
  // creates an array of empty arrays
  let freq = [...Array(nums.length)].map(() => []);
  // makes hashmap of (number, freq)
  for (let i = 0; i < nums.length; i++) {
    count.has(nums[i])
      ? count.set(nums[i], count.get(nums[i]) + 1)
      : count.set(nums[i], 1);
  }
  // make a freq array where idx is freq and value is numbers
  // with that freq
  for (let [n, value] of count.entries()) {
    freq[value].push(n);
  }
  // add to answer in backwards order, stopping when answer has
  // the same num elements as k
  let ans = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (let n = 0; n < freq[i].length; n++) {
      ans.push(freq[i][n]);
      if (ans.length == k) return ans;
    }
  }
}

topKFrequent([1, 1, 1, 2, 2, 3], 2);
