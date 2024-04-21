// numberOfVowels returns the number of vowels (a, e, i, o, u) in a given string

const numberOfVowels = function(data) {
  let count = 0;
  const lowerCaseData = data.toLowerCase();

  for (const d of lowerCaseData) {
    if (d === "a" | d === "e" | d === "i" | d === "o" | d === "u") {
      count ++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("I'm full of MAny vOwels"));
console.log(numberOfVowels("3 AaA 4 EeEe 2 Ii 3 Ooo 1 U"));
console.log(numberOfVowels("3 aaa 4 eeee 2 ii 3 ooo 1 u"));