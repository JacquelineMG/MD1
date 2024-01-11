// middle returns the middle element(s) from a given array

// const assertArraysEqual = require("./assertArraysEqual");
// const eqArrays = require("./eqArrays");

const middle = function(arr) {
  const midArr = [];
  const result1 = arr[Math.floor(arr.length / 2) - 1];
  const result2 = arr[Math.floor(arr.length / 2)];
  if (arr.length <= 2) {
    return midArr;
  }
  if (arr.length % 2 === 0) {
    midArr.push(result1, result2);
  } else {
    midArr.push(result2);
  }
  return midArr;
};

/*Test Cases"
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
*/