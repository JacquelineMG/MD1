// check() returns whether a given number is valid or not according to the Luhn Algorithm

const check = (number) => {
  const checkNum = Number(number.toString().slice(-1));
  const payloadArr = number.toString().split("").reverse().slice(1);

  console.log(payloadArr);
};

console.log(check(123457));

module.exports = check;