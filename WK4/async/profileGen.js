const readline = require("readline");

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const responses = [
  "Nice to meet you! \n",
  "I've never tried that before. \n",
  "Jazzy! \n",
  "I like brunch. \n",
  "The food of champions! \n",
  "I excel at sitting still. \n",
  "Thanks for sharing! \n"
];

const userInfo = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""
};

const profileGen = (index) => {

  if (index === 7) {
    console.log(`\n Here's your profile:

      ${userInfo[0]} loves listening to ${userInfo[2]} while ${userInfo[1]};
      devouring ${userInfo[4]} for ${userInfo[3]}; prefers ${userInfo[5]} over any other sport;
      and is amazing at ${userInfo[6]}.
`
    );
    rl.close();
  } else {
    rl.question(questions[index], (answer) => {
      userInfo[index] = answer;
      console.log(responses[index]);
      profileGen(index + 1);
    });
  
  }
};

profileGen(0);