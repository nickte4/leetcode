// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

/*
    runtime: O(n), space: O(n)
    gets the prefix and postfix of each index in nums
    then calculates the products using only array accesses
*/
function productExceptSelf(nums) {
  let prefix = [...Array(nums.length)].map(() => 0);
  let postfix = [...Array(nums.length)].map(() => 0);
  let ans = [];
  let temp = 1;
  // get prefix product of each index
  for (let i = 0; i < nums.length; i++) {
    temp *= nums[i];
    prefix[i] = temp;
  }
  // get postfix product of each index
  temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    temp *= nums[i];
    postfix[i] = temp;
  }
  // get product of left half and right half using prefix and postfix
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      ans.push(postfix[i + 1]);
    } else if (i == nums.length - 1) {
      ans.push(prefix[i - 1]);
    } else {
      ans.push(prefix[i - 1] * postfix[i + 1]);
    }
  }
  return ans;
}

productExceptSelf([1, 2, 3, 4]);
