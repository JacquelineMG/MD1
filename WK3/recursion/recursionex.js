const countEvenToTwelve = function(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
};

countEvenToTwelve(0);


const multiplesOfThree = function(num) {
  if (num <= 30) {
    console.log(num);
    multiplesOfThree(num + 3);
  }
};

multiplesOfThree(0);