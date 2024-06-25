const spinnerLines = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|", "/", "-", "\\", "|", "/", "-", "\\", "|", " "];

const spinner = input => {
  let time = 0;
  for (const line of input) {
    setTimeout(() => {
      process.stdout.write(`\r${line}   `);
    }, 100 + time);
    time += 200;
  }
};

spinner(spinnerLines);