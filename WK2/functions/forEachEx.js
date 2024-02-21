// example of forEach function

const array = ["a", "b", "c", "a", "a", "b"];

const result = function() {
  array.forEach((ele) => console.log(ele.toUpperCase()));
};

result();