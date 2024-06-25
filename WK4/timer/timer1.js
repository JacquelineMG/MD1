// https://stackoverflow.com/questions/8557624/how-i-trigger-the-system-bell-in-nodejs
const { exec } = require('child_process');

// (frequency, duration)

// Single beep
exec("[console]::beep(1000, 500)", {'shell':'powershell.exe'});

exec("[console]::beep(2000, 500)", {'shell':'powershell.exe'});

// Multiple beeps
exec("1..3 | %{ [console]::beep(500, 500) }", {'shell':'powershell.exe'});
