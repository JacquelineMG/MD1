// findWaldo function refactored to use forEach method

const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Found him at index ${index}!`);
};

findWaldo(["Alice", "Waldo", "Winston"], actionWhenFound);


/*
findWaldo function using for loop:

const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found him at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/