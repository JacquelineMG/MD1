const readline = require("readline");

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
});

const userInfo = {};


rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  userInfo.name = answer;
  console.log(`Nice to meet you, ${answer}!`);

  rl.question("What's an activity you like doing? ", (answer) => {
    userInfo.activity = answer;
    console.log(`I've never tried ${answer} before.`);

    rl.question("What do you listen to while doing that? ", (answer) => {
      userInfo.music = answer;
      console.log(`Jazzy.`);
    });

  });

});



