// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase


const calculateBottles = (money, bottles, summary) => {
  summary = (summary || {
    
    money:   {invested: 0,  remaining: 0},
    bottles: {bought: 0,   earned: 0,   remaining: 0},
    caps:    {remaining: 0}

  });

  const currentMoney = money + summary.money.remaining;

  if (money) {
    summary.money.invested += money;
  }
  
  if (currentMoney > 1) {
    summary.bottles.bought = Math.floor((currentMoney) / 2);
    summary.bottles.remaining += summary.bottles.bought;
    summary.money.remaining = currentMoney % 2;
  }

  if (summary.bottles.remaining > 1) {
    // redeem caps
    summary.bottles.earned += Math.floor(summary.bottles.remaining / 4);
    summary.caps.remaining += summary.bottles.remaining % 4;

    
    // redeem bottles
    summary.bottles.earned += Math.floor(summary.bottles.remaining / 2);
    summary.bottles.remaining = summary.bottles.remaining % 2;
  }

  if (summary.caps.remaining > 3) {
    summary.bottles.earned += Math.floor(summary.bottles.remaining / 4);
    summary.caps.remaining += summary.bottles.remaining % 4;
  }


  return summary;
};

console.log(calculateBottles(10));