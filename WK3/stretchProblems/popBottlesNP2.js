// I have 11 bottles

const purchasedBottles = 7;

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

  
  if (empties > 1) {
    let remainingCaps = tally.remainingCaps;
    let earnBottlesFromCaps = Math.floor((empties + remainingCaps)  / 4);
    let earnedBottles = Math.floor(empties / 2);
    tally.earnedBottles += earnedBottles + earnBottlesFromCaps;

    remainingCaps = empties - (earnBottlesFromCaps * 4);
    let remainingBottles = empties - (earnedBottles * 2);

    tally.remainingCaps = remainingCaps;
    tally.remainingBottles = remainingBottles;

    tally.totalBottles += earnedBottles + earnBottlesFromCaps;

    empties = earnedBottles + earnBottlesFromCaps + remainingBottles;
    tally.empties = empties;

    calculateBottles(0, empties, tally);
  }

  return tally;
};

console.log(calculateBottles(purchasedBottles));

// Once I'm done drinking them, I can recycle them to get 1 full bottle back for every 2 empties
// an 1 full bottle for every 4 caps

// 11 empties / 2 =
//    5 full bottles back and 1 empty remaining
// 11 empties / 4 =
//    2 full bottles back and 3 caps remaining

// current full bottles = 7
// current empties = 1

// Once I'm done drinking the 7 full bottles, I have 8 empties I can recycle

// 8 empties / 2 =
//    4 full bottles back and 0 empties remaining
// 8 empties + 3 caps / 4 =
//    2 full bottles back and 3 caps remaining

// Once I'm done drinking the 3 full bottles, I have 3 empties I can recycle

// 3 empties / 2 = 1 full bottle back and 1 empty remaining

// Once I'm done drinking the 1 full bottle, I have 2 empties I can recycle

// 2 empties / 2 = 1 full bottle back and 0 empties remaing

// Once I'm done drinking the 1 full bottle, I don't have enough empties to earn a free bottle :(

// From 11 purchased bottles, I earned 10 full bottles

