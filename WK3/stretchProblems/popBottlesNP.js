const calculateBottles = (initialBottles) => {
  console.log(`initialBottles: ${initialBottles}`);
  if (initialBottles < 1) {
    return initialBottles;
  }
  const bottlesFromCaps = Math.floor(initialBottles / 4);
  const bottlesFromReturns = Math.floor(initialBottles / 2);
  const extra = initialBottles - bottlesFromReturns;
  console.log("extra:", initialBottles, "-", bottlesFromReturns, "=", extra);
  const newBottles = bottlesFromCaps + bottlesFromReturns;

  return initialBottles + calculateBottles(newBottles);

};

console.log(calculateBottles(10));
