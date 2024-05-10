// generate a multiplication table for the values from 1 to the provided number

const multiplicationTable = (maxValue) => {
  let row = "";
  let multiple = 1;

  while (multiple <= maxValue) {
    for (let i = 1; i <= maxValue; i++) {
      row += (i * multiple) + " ";
    }
    row += "\n";
    multiple ++;
  } return row;
};

console.log(multiplicationTable(1));
console.log("-----");
console.log(multiplicationTable(5));
console.log("-----");
console.log(multiplicationTable(10));