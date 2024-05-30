// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase


const calculateBottles = (money, bottles, summary) => {
  summary = (summary || {
    
    money:   {invested: 0, available: 0},
    bottles: {bought: 0},
    empties: {earned: 0,   remaining: 0,  total: 0},
    caps:    {earned: 0,   remaining: 0,  total: 0}

  });

  let currentBottles = 0;

  const currentMoney = money + summary.money.available;

  if (money) {
    summary.money.invested += money;
  }
  
  if (currentMoney > 1) {
    summary.bottles.bought = Math.floor((currentMoney) / 2);
    currentBottles += summary.bottles.bought;
    summary.money.available = currentMoney % 2;
  }

  


  return summary;
};

console.log(calculateBottles(4));