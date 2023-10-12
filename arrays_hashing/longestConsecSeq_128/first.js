/*
    time: O(n), set.has should be O(1) runtime
    space: O(n), set used
*/
function longestConsecutive(nums) {
  // keep track of longest consecutive length
  let maxCount = 0;
  let set = new Set(nums);
  for (let num of nums) {
    // check if number is start of sequence
    if (!set.has(num - 1)) {
      count = 0;
      // increment current length while the set has next num in sequence
      while (set.has(num++)) count++;
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
}
