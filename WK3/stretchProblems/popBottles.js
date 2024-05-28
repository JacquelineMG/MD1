// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase


const purchaseBottles = (money) => {
  return Math.floor(money / 2);
};

const calculateBottles = (initialBottles) => {

  const bottlesFromCaps = Math.floor(initialBottles / 4);
  const bottlesFromReturns = Math.floor(initialBottles / 2);
  const totalBottles = initialBottles + bottlesFromCaps + bottlesFromReturns;

  let summary = {
    totalBottles: totalBottles,
    bottlesPurchased: initialBottles,
    bottlesFromCaps: bottlesFromCaps,
    bottlesFromReturns: bottlesFromReturns
  };

  return summary;

};

console.log(calculateBottles(purchaseBottles(15)));