const countdownGenerator = function(x) {
  let timer = x + 1;

  return function() {
    let message = "";
    timer -= 1;

    if (timer > 0) {
      message = `T-minus ${timer}...`;
    }
    if (timer === 0) {
      message = "Blast Off!";
    }
    if (timer < 0) {
      message = "Rockets already gone, bub!";
    }
    console.log(message);
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
