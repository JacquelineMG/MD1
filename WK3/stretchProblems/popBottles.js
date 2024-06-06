// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase



// Get process argv:
const investment = Number(process.argv[2]);

const purchaseBottles = (invest) => {
  return Math.floor(invest / 2);
};

const calculateBottles = (boughtBottles, bottles, tally) => {
  let fullBottles = 0;

  if (bottles) {
    fullBottles = bottles;
  }

  tally = tally || {
    totalBottles: 0,
    boughtBottles: 0,
    earnedBottles: 0,
    earnedFromBottles: 0,
    earnedFromCaps: 0,
    remainingBottles: 0,
    remainingCaps: 0,
    fullBottles: 0,
  };

  if (boughtBottles) {
    tally.boughtBottles += boughtBottles;
    tally.totalBottles += boughtBottles;
    fullBottles += boughtBottles;
  }

  // get # of remaining bottles/caps after last recycle:
  let remainingBottles = tally.remainingBottles;
  let remainingCaps = tally.remainingCaps;

  // calculate # of bottles/caps available for recycling:
  const currentBottles = fullBottles + remainingBottles;
  const currentCaps = fullBottles + remainingCaps;

  // calculate how many bottles are earned this recycle period:
  const bottlesEarnedFromBottles = Math.floor(currentBottles / 2);
  tally.earnedFromBottles += bottlesEarnedFromBottles;
  const bottlesEarnedFromCaps = Math.floor(currentCaps / 4);
  tally.earnedFromCaps += bottlesEarnedFromCaps;

  const bottlesEarned = bottlesEarnedFromBottles + bottlesEarnedFromCaps;

  // add # of bottles earned this recycle to totals in tally:
  tally.earnedBottles += bottlesEarned;
  tally.totalBottles += bottlesEarned;

  // calculate how many bottles/caps are left after recycling:
  remainingBottles = currentBottles % 2;
  remainingCaps = currentCaps % 4;

  // set remainders in tally:
  tally.remainingBottles = remainingBottles;
  tally.remainingCaps = remainingCaps;

  // set fullBottles to # earned this recycle:
  fullBottles = bottlesEarned;
  tally.fullBottles = fullBottles;


  // if there are still enough bottles, recycle once again:
  if (fullBottles + remainingBottles > 1) {
    tally = calculateBottles(0, fullBottles, tally);
  }

  return tally;
};

const calculate = calculateBottles(purchaseBottles(investment));

const printResult = (input) => {
  console.log(`
  TOTAL BOTTLES: ${input.totalBottles}
  REMAINING BOTTLES: ${input.remainingBottles}
  REMAINING CAPS: ${input.remainingCaps}
  -------------------
  TOTAL EARNED:
    FROM BOTTLES: ${input.earnedFromBottles}
    FROM CAPS: ${input.earnedFromCaps}
  `);
};

printResult(calculate);

