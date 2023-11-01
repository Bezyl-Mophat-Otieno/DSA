// stock prices = [10, 7, 5, 8, 11, 9]

// Brute force solution
//first I will initialize a var to hold the max profit initially let it be 0
// I will have two array loops to compare the prices
// I will compare the difference between the two prices and if the difference is greater than the max profit I will set the max profit to the difference

const maxProfit = (prices) => {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        let profit = prices[j] - prices[i];
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Greedy solution
//[7, 1, 5, 3, 6, 4]));
// I will have the min Price set to the first price in the array
// I will have the max profit set to 0
const maxProfit2 = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
