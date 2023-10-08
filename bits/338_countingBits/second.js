/*
    time: O(n), dynamic programming solution
    time: O(1), not including answer array
*/
function countBits(n) {
  let dp = new Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 == i) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
}

console.log(countBits(5));
