// 704. Binary Search
// https://leetcode.com/problems/binary-search/

/* 
    runtime: O(log n), space: O(1)
    uses binary search algorithm
*/
function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let midIdx = Math.floor((start + end) / 2);
    if (nums[midIdx] > target) {
      end = midIdx - 1;
    } else if (nums[midIdx] < target) {
      start = midIdx + 1;
    } else {
      return midIdx;
    }
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
