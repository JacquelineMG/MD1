const sumToOne = function(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumToOne(n - 1);
};

console.log("RESULT:", sumToOne(100));