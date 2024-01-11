// flatten flattens nested arrays into a single-level array

// const assertArraysEqual = require("./assertArraysEqual");
// const eqArrays = require("./eqArrays");

const flatten = function(arr) {
  const flatArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Array.isArray(arr[i])) {
      flatArr.push(...flatten(arr[i]));
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};

console.log(flatten([1,2, [3,4, [5,6,]]]));


