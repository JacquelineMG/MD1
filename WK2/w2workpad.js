const multiplier = function(factor) {
  return number => number * factor;
};

let twice = multiplier(2);
console.log(twice(5));


const outer = function() {
  const x = 10;

  const inner = function() {
    console.log("The value of x is: " + x);
  };
  return inner;
};

const foo = outer();
foo();



