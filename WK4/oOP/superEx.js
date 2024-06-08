class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and my quirky fact is: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }
}

const bob = new Mentor('Bob Ross', `I'm a happy little acident.`);

const joy = new Student(`Joy Smiley`, `I laugh at everything.`);

console.log(bob.bio());

console.log(joy.bio());