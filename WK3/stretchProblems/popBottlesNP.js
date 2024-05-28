const calculateBottles = (initialBottles) => {

  const bottlesFromCaps = Math.floor(initialBottles / 4);
  const bottlesFromReturns = Math.floor(initialBottles / 2);
  const newBottles = bottlesFromCaps + bottlesFromReturns;

  return initialBottles + newBottles;

};

console.log(calculateBottles(5));
