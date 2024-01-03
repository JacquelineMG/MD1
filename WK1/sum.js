const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

const sum = function(num1, num2) {
  return num1 + num2;
};

console.log(sum(arg1, arg2));