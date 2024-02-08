const myfunc = function() {
  console.log("FUNCTIONS");
};

myfunc.trait = "red";
myfunc.size = "little";
myfunc.age = "a few minutes";

const callback = function(f) {
  console.log("This is a callback!");
  f();
};

callback(myfunc);