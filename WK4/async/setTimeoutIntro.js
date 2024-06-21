console.log("first line");

const print = () => {
  console.log("Printing...");
  setTimeout(() => {
    console.log("Printing Complete");
  }, 3000);
};

setTimeout(() => {
  print();
  console.log("TIMEOUT");
}, 1000);

console.log("last line");