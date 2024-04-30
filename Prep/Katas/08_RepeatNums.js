// repeatNumbers takes in an array of arrays where each sub-array has two numerica values
// the first number is the value to repeat, the second the number of times to repeat the value

const repeatNumbers = function(data) {
  let result = "";

  for (let x = 0; x < data.length; x++) {
    if (result.length) {
      result += `, `;
    }
    for (let y = 0; y < data[x][1]; y++) {
      result += `${data[x][0]}`;
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);