
const purchaseBottles = (money) => {
  return Math.floor(money / 2);
};

const calculateBottles = (initialBottles) => {

  if (initialBottles === 1) {
    return initialBottles;
  }

  const bottlesFromCaps = Math.floor(initialBottles / 4);
  const remainingCaps = initialBottles - (bottlesFromCaps * 4);

  console.log("caps", remainingCaps);


  const bottlesFromReturns = Math.floor(initialBottles / 2);
  const remainingBottles = initialBottles - (bottlesFromReturns * 2);

  const newBottles = bottlesFromCaps + bottlesFromReturns;
  const currentBottles = newBottles + remainingBottles;

  return initialBottles + calculateBottles(currentBottles);

};

console.log(calculateBottles(purchaseBottles(40)));



