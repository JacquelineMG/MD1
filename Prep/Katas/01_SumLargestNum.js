// given an array of 2 or more numbers, sumLargestNumbers returns the sum of the array's 2 largest numbers
const sumLargestNumbers = function(data) {

  const sortedData = data.sort((a, b) => b - a);

  const x = sortedData[0];
  const y = sortedData[1];

  return x + y;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));