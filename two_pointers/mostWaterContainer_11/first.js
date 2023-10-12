// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

/* 
    Runtime: O(n), space: O(1).
    Uses two pointers, one at start and one at end.
    Advances the ptr with a smaller height.
*/
function maxArea(height) {
  let l = 0;
  let r = height.length - 1;
  let maxArea = 0;
  while (l < r) {
    let lower = Math.min(height[l], height[r]);
    let area = Math.abs(l - r) * lower;
    maxArea = Math.max(maxArea, area);
    lower == height[l] ? l++ : r--;
  }
  return maxArea;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
