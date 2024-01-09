const rolls = Number(process.argv[2]);

const generateRandom = function() {
  return Math.floor(Math.random() * (6 - 1) + 1);
};

const rollDice = function() {
  let result = "";
  if (rolls) {
    result += `${generateRandom()}`;
    for (let x = 1; x < rolls; x++) {
      result += `, ${generateRandom()}`;
    }
  }
  return result;
};

console.log(`Rolled ${rolls} dice: ${rollDice()}`);


