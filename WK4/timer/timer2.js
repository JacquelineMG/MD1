const { exec } = require('child_process');

const beep = () => {
  exec("[console]::beep(700, 500)", {'shell':'powershell.exe'});
};

const goodbye = () => {
  process.stdout.write("Thanks for using me, ciao!");
};

process.stdin.setEncoding('utf8');

const os = require('os');


process.stdin.on('readable', function() {
  let chunk = process.stdin.read();

  if (chunk === null) {
    return;
  }

  chunk = chunk.split(os.EOL);
  if (chunk[0] === "b") {
    beep();
    goodbye();
  } else {
    let number = Number(chunk[0]);
    if (number > 0) {
      process.stdout.write(`Setting timer for: ${number} seconds \n`);
      setTimeout(() => {
        beep();
        goodbye();
      }, number * 1000);
    }
  }
});