// rasinAlarm checks an array for raisins ("🍇") and returns "Raisin alert!" if found or an "All good!"

const raisinAlarm = function(cookie) {
  return cookie.includes("🍇") ? "🍇 Raisin alert!🍇" : "😎 All good! 😎";
};

const raisinAlarmLoop = function(cookie) {
  for (const c of cookie) {
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

console.log(raisinAlarmLoop(["🧁", "🍫", "🍪", "🍫"]));
console.log(raisinAlarmLoop(["🍫", "🍇", "🍪", "🍪", "🍇"]));
console.log(raisinAlarmLoop(["🧁", "🍫", "🍪"]));