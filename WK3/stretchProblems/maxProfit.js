/* given a list of stock prices for a given day, maxProfit() returns the maximum profit that could have been made by
buying a stock at the given price and then selling the stock later on.
If no profit could have been made, it returns -1 */

const maxProfit = (input) => {
  let profit = 0;

  while (input.length !== 1) {
    for (let i = 1; i < input.length; i++) {
      if (input[i] - input[0] > profit) {
        profit = input[i] - input[0];
      }
    }
    input = input.slice(1);
  }

  return profit > 0 ? profit : -1;
};


// Test Case:

const input1 = [45, 24, 35, 31, 40, 38, 11];

console.log(maxProfit(input1));

const input2 = [45, 40, 38, 36, 34, 32, 11];

console.log(maxProfit(input2));

const input3 = [10, 15, 30];

console.log(maxProfit(input3));

const input4 = [10, 2, 10];

console.log(maxProfit(input4));

