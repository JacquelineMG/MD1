// camelCase takes in a normal string and converts it into a camel case string

const camelCase = function(input) {
  const inputLC = input.toLowerCase();
  let result = "";

  for (let i = 0; i < inputLC.length; i++) {
    if (inputLC[i - 1] === " ") {
      result += inputLC[i].toUpperCase();
    } else {
      if (inputLC[i] !== " ") {
        result += inputLC[i];
      }
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("I Am a String of many worDs"));