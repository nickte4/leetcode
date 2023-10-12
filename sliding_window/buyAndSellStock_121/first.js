// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (sell < prices.length) {
    if (prices[sell] > prices[buy]) {
      let profit = prices[sell] - prices[buy];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return maxProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1]));
