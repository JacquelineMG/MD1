// countLetters takes in a string and returns a count of each letter in the string

//const assertEqual = require("../../WK1/lotide/assertEqual");

const countLetters = function(sentence) {
  const letterCount = {};
  const sentenceEdit = sentence.replace(/\s/g, '').toUpperCase();

  for (const i of sentenceEdit) {
    if (letterCount[i]) {
      letterCount[i] += 1;
    } else {
      letterCount[i] = 1;
    }
  }
  return letterCount;
};

// Test Cases:
console.log(countLetters("This is a test sentence"));
console.log(countLetters("Maeve is asleep"));

