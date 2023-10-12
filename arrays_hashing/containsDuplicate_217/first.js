/*
217. Contains Duplicate

https://leetcode.com/problems/contains-duplicate/
*/

function containsDuplicate(nums) {
  let seenNums = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seenNums.has(nums[i])) {
      return true;
    } else {
      seenNums.add(nums[i]);
    }
  }
  return false;
}
