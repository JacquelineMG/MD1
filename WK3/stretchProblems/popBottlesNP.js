
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
  

  // if there's enough available money, purchase bottles
  // set remaining money to amount left over after purchases
  if (availableMoney > 1) {
    summary.bottles.purchased += Math.floor(availableMoney / 2);
    summary.bottles.total += summary.bottles.purchased;
    availableBottles += summary.bottles.purchased;

    summary.caps.totalCount += availableBottles;
    summary.caps.remaining += availableBottles;
    summary.empties.totalCount += availableBottles;
    summary.empties.remaining += availableBottles;

    summary.money.remaining = availableMoney % 2;
    summary.money.spent += availableMoney - availableMoney % 2;
  }

  if (bottles) {
    availableBottles += bottles;
    summary.bottles.total += bottles;
    summary.caps.totalCount += bottles;
    summary.caps.remaining += bottles;
    summary.empties.totalCount += bottles;
    summary.empties.remaining += bottles;
  }



  console.log("Available Bottles:", availableBottles);
  return summary;
};

/*

const printResult = summary => {
  console.log("Money Invested:", summary.money.invested);
  console.log("Total Bottles:", summary.bottles.total);
};

printResult(calculateBottles(30));

*/

console.log(calculateBottles(10));







