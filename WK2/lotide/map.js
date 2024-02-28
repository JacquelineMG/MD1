// map function takes in an array and a callback function then returns a new array based on the results of the callback

const words = ["gRound", "control", "To", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(words, word => word.toLowerCase());
const results4 = map(words, word => word.length);
const results5 = map(words, word => word + "!");


console.log(results1);
console.log(results2);
console.log(results3);
console.log(results4);
console.log(results5);