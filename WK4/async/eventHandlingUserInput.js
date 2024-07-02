const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  if (key === `\u0003`) {
    process.stdout.write("Bye!");
    process.exit();
  }

  process.stdout.write(`...... \n`);
});

console.log("After callback");