const countDownFrom = (num) => {
  if (num === 1) {
    console.log(num);
  } else {
    console.log(num);
    countDownFrom(num - 1);
  }
};

countDownFrom(10);