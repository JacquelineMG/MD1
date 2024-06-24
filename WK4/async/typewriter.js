// take a sentence and displa it as animation

const sentence = "good morning!";

const typewriter = string => {
  let delay = 80;
  for (const s of string) {
    setTimeout(() => {
      process.stdout.write(s);
    }, 80 + delay);
    delay += 80;
  }
};

typewriter(sentence);
