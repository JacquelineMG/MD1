// Construct the a function called titleCase that takes a sentence string and gives it title casing.

const titleCase = string => {
  let sentence = "";
  if (string.length === 0) {
    return string;
  } else {
    for (let s = 0; s < string.length; s++) {
      if (s === 0 || string[s - 1] === " ") {
        sentence += string[s].toUpperCase();
      } else {
        sentence += string[s].toLowerCase();
      }
    }
  }
  return sentence;
};


// Test Cases:

const ex1 = "this is an example";
const ex2 = "test";
const ex3 = "i r cool";
const ex4 = "WHAT HAPPENS HERE";
const ex5 = "";
const ex6 = "A";

console.log(titleCase(ex1));
console.log(titleCase(ex2));
console.log(titleCase(ex3));
console.log(titleCase(ex4));
console.log(titleCase(ex5));
console.log(titleCase(ex6));