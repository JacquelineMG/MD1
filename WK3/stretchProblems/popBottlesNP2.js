
const purchasedBottles = 10;

const calculateBottles = (boughtBottles, bottles, tally) => {
  let empties = 0;

  if (bottles) {
    empties = bottles;
  }

  tally = tally || {
    totalBottles: 0,
    boughtBottles: 0,
    earnedBottles: 0,
    remainingBottles: 0,
    remainingCaps: 0,
    empties: 0,
  };

  if (boughtBottles) {
    tally.boughtBottles += boughtBottles;
    tally.totalBottles += boughtBottles;
    empties += boughtBottles;
  }
  console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

  let remainingBottles = tally.remainingBottles;
  let remainingCaps = tally.remainingCaps;
  const currentBottles = empties + remainingBottles;
  const currentCaps = empties + remainingCaps;
  let bottlesEarnedFromBottles;
  let bottlesEarnedFromCaps;

  console.log("Before:", {
    empties: empties,
    remainingBottles: remainingBottles,
    remainingCaps: remainingCaps
  });

  // 10 empties / 2 =
  //    5 full bottles back and 0 empty remaining
  // 10 empties / 4 =
  //    2 full bottles back and 2 caps remaining

  bottlesEarnedFromBottles = Math.floor(currentBottles / 2);
  bottlesEarnedFromCaps = Math.floor(currentCaps / 4);







  console.log("After:", {
    empties: empties,
    remainingBottles: remainingBottles,
    remainingCaps: remainingCaps,
    bottlesEarnedFromBottles: bottlesEarnedFromBottles,
    bottlesEarnedFromCaps: bottlesEarnedFromCaps,
  });
  console.log("-----------------------------------------------------");






  return tally;
};

console.log(calculateBottles(purchasedBottles));


// I have 10 bottles
// Once I'm done drinking them, I can recycle them to get 1 full bottle back for every 2 empties
// and 1 full bottle for every 4 caps

// 10 empties / 2 =
//    5 full bottles back and 0 empty remaining
// 10 empties / 4 =
//    2 full bottles back and 2 caps remaining


// Now I have 7 full bottles, 0 empties, 2 caps
// After drinking:
// 7 empties / 2 =
//    3 full bottles back and 1 empty remaining
// 7 empties + 2 caps / 4 =
//    2 full bottles back and 1 cap remaining


// Now I have 5 full bottles, 1 empty, 1 cap
