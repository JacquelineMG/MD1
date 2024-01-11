// eqArrays compares two arrays

// const assertEqual = require("./assertEqual");

const eqArrays = function(arr1, arr2) {
  for (const i of arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


/* Test Cases:
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
*/

module.exports = eqArrays;