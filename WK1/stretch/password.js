// obfuscate takes in a single string password from the CL and prints out an obfuscated version of that password

const arg = process.argv[2];

const obfuscate = function(word) {
  let lowerWord = word.toLowerCase();
  let newPassword = "";
  for (let x = 0; x <= lowerWord.length - 1; x++) {
    if (lowerWord[x] === "a") {
      newPassword += "4";
    } else if (lowerWord[x] === "e") {
      newPassword += "3";
    } else if (lowerWord[x] === "o") {
      newPassword += "0";
    } else if (lowerWord[x] === "l") {
      newPassword += "1";
    } else {
      newPassword += lowerWord[x];
    }
  }
  console.log(newPassword);
};

obfuscate(arg);
