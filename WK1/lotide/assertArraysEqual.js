// assertArraysEqual console logs a pass or fail message depending on whether two arrays are equal

const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2) === true ? console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`) : console.log(`❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
};

/* Test Cases:
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2, 3], [1, 2]);
*/

module.exports = assertArraysEqual;