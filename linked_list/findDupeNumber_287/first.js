// 287. Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/

/*
    runtime: O(n), space O(1)
    Linked list cycle problem, floyd's algorithm.
    This is a very difficult problem that should probably be a Hard.
    Best explanation is on Neetcode.io.
*/
function findDuplicate(nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) break;
  }

  let slow2 = 0;
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow == slow2) return slow;
  }
}
