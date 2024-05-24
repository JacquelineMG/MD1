// check() returns whether a given number is valid or not according to the Luhn Algorithm

const check = (number) => {
  const checkNum = Number(number.toString().slice(-1));
  const payloadArr = number.toString().split("").reverse().slice(1);

  let sum = 0;

  for (let i = 0; i < payloadArr.length; i++) {
    if (i % 2 !== 0) {
      sum += Number(payloadArr[i]);
    }
    if (i % 2 === 0) {
      let double = payloadArr[i] * 2;
      if (double < 10) {
        sum += double;
      } else {
        for (let d of double.toString()) {
          sum += Number(d);
        }
      }
    }
  }
  return (10 - (sum  % 10)) === checkNum;
};

module.exports = check;