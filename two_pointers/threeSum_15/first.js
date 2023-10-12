// 15. 3Sum
// https://leetcode.com/problems/3sum/

function threeSum(nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue; // moves to next iteration
    }
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let threeSum = nums[i] + nums[l] + nums[r];
      if (threeSum > 0) {
        r--;
      } else if (threeSum < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] == nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
