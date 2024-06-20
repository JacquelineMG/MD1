const fs = require("fs");

console.log('BEFORE writeFile call');

fs.writeFile("./test_async.txt", "I'm a file\n", (error) => {
  if (error) {
    // Handle error
    console.log("Failed to write to file");
    return;
  }
  // Success!
  console.log("Successfully wrote to file");
});

console.log('AFTER writeFile call');