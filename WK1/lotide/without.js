// without removes unwanted items from an array

// const assertArraysEqual = require("./assertArraysEqual");
// const eqArrays = require("./eqArrays");

const without = function(sourceArr, itemsToRemoveArr) {
  const resultArr = [];
  for (let i = 0; i <= sourceArr.length - 1; i++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      resultArr.push(sourceArr[i]);
    }
  }
  return resultArr;
};

console.log(without([1,2,3,4,5,"dog", "cat"], [1, 4]));