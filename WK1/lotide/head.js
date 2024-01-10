// head: returns first item of an array or undefined for inputs without a length.

const assertEqual = require("./assertEqual");

const head = function(array) {
  return array.length > 0 ? array[0] : undefined;
};


/*
TESTS:

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([]), 5);
assertEqual(head(["Lighthouse", "Labs"]), "Hello");

assertEqual(head(5, 4, 3), 5);

*/