const myfunc = function() {
  return "Good morning!";
};

const otherfunc = myfunc();

const obj = {
  hello: "hello",
  goodbye: "goodbye",
  greeting: otherfunc
};

console.log(obj.greeting);