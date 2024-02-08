// assertObjectsEqual takes in two objects and console logs a pass or fail message depending on whether the objects match or not

const eqObjects = require("./eqObjects");

const assertObjectsqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// TEST CASES:
const object1 = {colours: ["red"]};
const object2 = {colours: ["red"]};
const object3 = {colour: "red", temp: "cold", height: "taLl", weather: "cloudy"};
const object4 = {colour: "red", temp: "cold", height: "tall", weather: "cloudy"};

assertObjectsqual(object1, object2);
assertObjectsqual(object3, object4);
