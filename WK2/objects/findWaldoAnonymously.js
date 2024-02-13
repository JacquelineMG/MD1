// findWaldo function refactored to use an anonymous callback

const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);
    }
  });
};


findWaldo(["Alice", "Alice", "Alice", "Alice", "Waldo", "Winston"], function(index) {
  console.log(`Found him at index ${index}!`);
});