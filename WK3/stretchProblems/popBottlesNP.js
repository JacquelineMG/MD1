
/*
const calculateBottles = (money, bottles, summary) => {

  summary = (summary || {
    money:    {invested: 0, spent: 0, remaining: 0},
    bottles:  {purchased: 0, total: 0},
    caps:     {totalCount: 0, recycled: 0, remaining: 0, bottlesEarned: 0},
    empties:  {totalCount: 0, recycled: 0, remaining: 0, bottlesEarned: 0}
  });

  const availableMoney = money + summary.money.remaining;
  let availableBottles = 0;

  // invest money / add amount to summary.money.invested
  if (money) {
    summary.money.invested += money;
  }


  return summary;
};
*/

/*

const printResult = summary => {
  console.log("Money Invested:", summary.money.invested);
  console.log("Total Bottles:", summary.bottles.total);
};

printResult(calculateBottles(30));

*/

const calculateBottles = (money, bottles, summary) => {

  summary = summary || {
    money: {invested: 0, spent: 0, remaining: 0},
    bottles: {purchased: 0},
    empties: {recycled: 0, remaining: 0, bottlesEarned: 0}
  };

  console.log("-------------------");
  if (summary) {
    console.log(summary);
  }

  // invest money
  if (money) {
    summary.money.invested += money;
  }

  const availableMoney = money + summary.money.remaining;
  let availableBottles = 0 + summary.empties.remaining;

  if (bottles) {
    console.log("bottles:", bottles);
    availableBottles = bottles;
  }

  // if there's money available, buy bottles
  if (availableMoney > 1) {
    summary.money.spent = availableMoney - availableMoney % 2;
    summary.money.remaining = availableMoney % 2;
    summary.bottles.purchased += Math.floor(availableMoney / 2);

    availableBottles += summary.bottles.purchased;
  }

  const recycle = (item) => {
    item.bottlesEarned += Math.floor(item.remaining / 2);
    item.remaining = item.remaining % 2;
  };

  recycle("summary.empties");

  console.log("BOTTLES:", availableBottles);
  console.log("SUMMARY:", summary);

  return summary;
};

calculateBottles(10);
// console.log(calculateBottles(10));







