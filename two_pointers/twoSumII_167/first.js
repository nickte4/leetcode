// 167. Two Sum II - Input Array is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// [i, j] must be returned where 1 < i < j < numbers.length (1-indexed array)
function twoSum(numbers, target) {
  let numMap = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (numMap.has(target - numbers[i])) {
      let idx2 = numMap.get(target - numbers[i]);
      if (i < idx2) return [i + 1, idx2];
      return [idx2, i + 1];
    } else {
      numMap.set(numbers[i], i + 1);
    }
  }
}
