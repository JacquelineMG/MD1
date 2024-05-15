// swapper swaps values between two objects using the given keys.

const swapper = function(key1, object1, key2, object2) {

  if (object1[key1] === undefined || object2[key2] === undefined) {
    console.log("Invalid key(s)! No swap for you!");
  } else {
    console.log("Swap!");

    const holdVal = object1[key1];
    object1[key1] = object2[key2];
    object2[key2] = holdVal;
  
    console.log("object1: ", object1);
    console.log("object2: ", object2);
  }
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
swapper("a", { a: 1, b: 2, c: 3 }, "d", { a: 4, b: 3, c: 5 });
swapper("a", { a: 1, b: 2, c: 3 }, "b", { a: 4, b: 3, c: 5 });