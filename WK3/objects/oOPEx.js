// Review of Simple OOP in JavaScript

const dog = {
  sound: "woof", // property
  breed: "shih tzu", // property
  speak: function() {  // method
    console.log(`${this.breed}s say ${this.sound}`);
  },
  teachMeSomething: function() {
    if (dog === this) {
      console.log("dog === this");
    }
    this.speak();
  }
};

dog.teachMeSomething();