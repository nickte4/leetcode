// 1. Two Sum
// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(target - nums[i])) {
      return [i, numMap.get(target - nums[i])];
    } else {
      numMap.set(nums[i], i);
    }
  }
}
