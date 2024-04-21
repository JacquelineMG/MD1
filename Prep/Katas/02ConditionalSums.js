// conditionalSum add only the numbers in a given array that match the given condition

const conditionalSum = function(values, condition) {
  if (condition !== "even" && condition !== "odd") {
    return "Invalid condition";
  }

  let sum = 0;

  for (const val of values) {
    if (condition === "even" && val % 2 === 0) {
      sum += val;
    }
    if (condition === "odd" && val % 2 !== 0) {
      sum += val;
    }
  }
  
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));