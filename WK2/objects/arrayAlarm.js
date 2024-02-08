// arrayAlarm checks an array for given item and returns an alert if found or an all good

const arrayAlarm = function(array, itemToCheckFor) {
  return array.includes(itemToCheckFor) ? `⚠️  Array contains ${itemToCheckFor} ⚠️` : `❎ Array does not contain ${itemToCheckFor} ❎`;
};

const arrayAlarmLoop = function(array, itemToCheckFor) {
  for (const a of array) {
    if (a === itemToCheckFor) {
      return `⚠️  Array contains ${itemToCheckFor} ⚠️`;
    }
  }
  return `❎ Array does not contain ${itemToCheckFor} ❎`;
};

console.log(arrayAlarm([1,2,3,4,5,6,7,8], 6));
console.log(arrayAlarm([1,2,3,4,5,6,7,8], 9));

console.log(arrayAlarmLoop(["cat", "dog", "bird"], "rabbit"));
console.log(arrayAlarmLoop(["❤️", "❤️", "❤️", "🧡", "❤️", "❤️"], "🧡"));

