const average = function(list) {
  let sum = 0;
  for (let num of list) {
    sum = sum + num;
  }
  return sum / list.length;
};

console.log(average([3, 5, 7]));


let input = process.argv[2];

const reverse = function(original) {
  return original.split('').reverse().join('');
};

if (input)
  console.log(reverse(input));