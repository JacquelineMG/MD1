// CHALLENGE:
// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

// https://stackoverflow.com/questions/8557624/how-i-trigger-the-system-bell-in-nodejs
const { exec } = require('child_process');

// (frequency, duration)

// Single beep
// exec("[console]::beep(700, 500)", {'shell':'powershell.exe'});

// Multiple beeps
// exec("1..3 | %{ [console]::beep(500, 500) }", {'shell':'powershell.exe'});

const timeArr = process.argv.splice(2);

const timer = times => {
  if (times.length < 1) {
    return false;
  }

  times.sort((a, b) => a - b);

  for (const t of times) {
    let numT = Number(t);
    console.log(numT > 0);
    if (numT > 0) {
      setTimeout(() => {
        exec("[console]::beep(700, 500)", {'shell':'powershell.exe'});
      }, numT * 1000);
    }
  }
};

timer(timeArr);