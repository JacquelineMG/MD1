const sumItems = function(array) {
  let sum = 0;
  for (const a of array) {
    if (!Array.isArray(a)) {
      sum += a;
    } else {
      sum += sumItems(a);
    }
  }
  return sum;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [[1, 2, [[3], 4]], 5, []];
const arr3 = [[[[[[[[[[[[[1]]]]]]]]]]]]];
const arr4 = [[[2, 3, 5]], [[4, 1]], [[[[5]]]]];

console.log(sumItems(arr1));
console.log(sumItems(arr2));
console.log(sumItems(arr3));
console.log(sumItems(arr4));
