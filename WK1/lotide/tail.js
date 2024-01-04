// tail: returns a new array with all except the first item of original array or an empty array if the input has a length equal or less than one.

const tail = function(array) {
  const newArr = [];
  if (array.length <= 1) {
    return newArr;
  } else {
    for (let x = 1; x < array.length; x++) {
      newArr.push(array[x]);
    }
    return newArr;
  }
};

/* TEST CASES:

const string = ["a", "b", "c"];
const shortString = ["a"];
const numbers = [1,2,3,4,5];
const pair = [1,2];
const number = [1];
const obArr = [{name: "John"}, {age: 93}, {location: "Mexico"}];


console.log(tail(string));
console.log(tail(shortString));
console.log(tail(numbers));
console.log(tail(pair));
console.log(tail(number));
console.log(tail(obArr));

*/