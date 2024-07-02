process.stdin.on("data", (key) => {
  process.stdout.write(`...... \n`);
});

console.log("After callback");