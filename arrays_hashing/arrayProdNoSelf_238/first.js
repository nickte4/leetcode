// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

// runtime: O(n^2), space: O(1)
// brute force
function productExceptSelf(nums) {
  let prod = 1;
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j == i) {
        continue;
      }
      prod *= nums[j];
    }
    ans.push(prod);
    prod = 1;
  }
  return ans;
}

productExceptSelf([1, 2, 3, 4]);
