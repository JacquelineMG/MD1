const { exec } = require('child_process');

const beep = () => {
  exec("[console]::beep(700, 500)", {'shell':'powershell.exe'});
};

const goodbye = () => {
  process.stdout.write("Thanks for using me, ciao!");
  process.exit(0);
};

process.stdin.setEncoding('utf8');

const os = require('os');

process.on('SIGINT', () => {
  goodbye();
});

process.stdin.on('readable', function() {
  let chunk = process.stdin.read();

  if (chunk === null) {
    return;
  }

  chunk = chunk.split(os.EOL);
  if (chunk[0] === "b") {
    beep();
  } else {
    let number = Number(chunk[0]);
    if (number > 0) {
      process.stdout.write(`Setting timer for: ${number} seconds \n`);
      setTimeout(() => {
        beep();
      }, number * 1000);
    } else {
      process.stdout.write(`Sorry, that's not a valid input.`);
    }
  }
});