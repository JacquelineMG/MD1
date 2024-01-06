/*
pigLatin function:
X takes any number of string command line args
X puts the args into pig latin
X console logs the args as a sentence
*/

const argsArr = process.argv.splice(2);


const pigLatin = function(args) {
  let sentence = "";
  for (const a of args) {
    for (let l = 1; l <= a.length - 1; l++) {
      sentence += (a[l]);
    }
    sentence += a[0] + "ay ";
  }
  console.log(sentence);
};

pigLatin(argsArr);