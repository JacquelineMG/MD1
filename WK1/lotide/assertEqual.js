// assertEqual: compares two inputs and console logs a pass or fail message depending on if the inputs are equal or not.

const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

/*
TESTS:

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

assertEqual("sunshine", "Sunshine");
assertEqual("Rain", "Rain");

assertEqual(123, 123);
assertEqual(123, 122);
*/

module.exports = assertEqual;
