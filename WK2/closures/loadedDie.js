
// const rollDie = function() {
//   return Math.floor(1 + Math.random() * 6);
// };

// console.log(rollDie());

// makeLoadedDie returns a function that when called seems to generate random numbers between 1 and 6,
// but in fact returns numbers from a hardcoded array

const makeLoadedDie = function() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let roll = -1;

  return function() {
    roll += 1;

    // take rolls back to start of list rather than have them undefined
    if (roll === list.length) {
      roll = 0;
    }
    
    return list[roll];
  };
};

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
