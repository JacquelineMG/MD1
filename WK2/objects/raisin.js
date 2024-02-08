// rasinAlarm checks an array for raisins ("🍇") and returns "Raisin alert!" if found or an "All good!"

const raisinAlarm = function(cookie) {
  for (let c of cookie) {
    if (c === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

// Test Cases:
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));