// 167. Two Sum II - Input Array is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    if (numbers[l] + numbers[r] == target) {
      return [l + 1, r + 1];
    }
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else {
      l++;
    }
  }
}
