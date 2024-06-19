// Implement the encrypt function, which will take in a plaintext (i.e. un-encrypted text) string and a key (negative for a left shift, positive for a right shift).

const cipherOb = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z"
};

const encrypt = (string, key) => {
  let encrypted = "";

  for (let s of string) {
    if (s === " ") {
      encrypted += " ";
    }
    for (let c in cipherOb) {
      if (s === cipherOb[c]) {
        let index = Number(c) + key;
        if (index < 1) {
          index = 26 + index;
        }
        if (index > 26) {
          index = index - 26;
        }
        encrypted += cipherOb[index];
      }
    }
  }
  return encrypted;
};

// Test Cases:
console.log(encrypt("hello", -3) === "ebiil");

console.log(encrypt("hello world", 5) === "mjqqt btwqi");