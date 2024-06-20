const period = () => {
  setInterval(() => {
    process.stdout.write(".");
  }, 1000);
};

const startWashingMachine = () => {
  console.log("Starting washing machine.");

  setTimeout(() => {
    console.log("Washing machine done.");
  }, 5000);
};

const startDishwasher = () => {
  console.log("Starting dish washer.");

  setTimeout(() => {
    console.log("Dishwasher done.");
  }, 8000);
};

const dust = () => {
  console.log("Dusting.");
};

const tidy = () => {
  console.log("Tidying.");
};



startDishwasher();
startWashingMachine();

dust();
tidy();

period();