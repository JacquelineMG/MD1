// findKey takes in object and callback, and returns first key for which callback returns truthy or undefined if none is found

const findKey = function(object, callback) {
  for (const o in object) {
    if (callback(object[o])) {
      return o;
    }
  }
};


const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const results1 = findKey(object1, x => x.stars === 3);

console.log(results1);


const object2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const results2 = findKey(object2, x => x.stars === 5);

console.log(results2);