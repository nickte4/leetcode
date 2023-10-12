// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

/*
    runtime: O(n), space O(1) [not including output array]
    computes prefix and postfix in the output array itself
*/
function productExceptSelf(nums) {
  let prefix = 1;
  let ans = [Array(nums.length)].map(() => 0);
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix;
    prefix *= nums[i];
  }
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= postfix;
    postfix *= nums[i];
  }
  return ans;
}

productExceptSelf([1, 2, 3, 4]);
