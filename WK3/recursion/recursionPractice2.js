const recursiveRun = (num) => {
  console.log("Recursion!");
  if (num === 0) {
    console.log("Recursion Done!");
  } else {
    console.log("Run #", num);
    recursiveRun(num - 1);
  }
};

recursiveRun(10);


const recursiveSum = (num) => {
  if (num === 10) {
    console.log("num is: " + num + "... returning result:");
    return num;
  } else {
    console.log("num is: " + num + "... adding one");
    return num + recursiveSum(num + 1);
  }
};

console.log(recursiveSum(0));
