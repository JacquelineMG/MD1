// findKeyByValue searches for a key on an object where its value matches a given value

const findKeyByValue = function(obj, val) {
  let match;

  for (let o in obj) {
    if (obj[o] === val) {
      match = o;
    }
  }
  return match;
};

// Test Case:
const bestTV = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTV, "The Wire"));