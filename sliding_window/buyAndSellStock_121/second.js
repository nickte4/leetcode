/*
    runtime: O(n)
    space: O(1)
*/
function maxProfit(prices) {
  let l = 0;
  let r = 0;
  let maxSell = 0;
  let minBuy = 0;
  while (r < prices.length) {
    if (prices[r] < minBuy) {
      l = r;
      minBuy = prices[l];
      maxSell = minBuy;
    }
    if (prices[r] > maxSell) {
      maxSell = prices[r];
    }
    r++;
  }
  return maxSell - minBuy;
}
