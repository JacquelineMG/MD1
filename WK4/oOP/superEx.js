class Person {
  constructor(name, quirkyFact, cohort) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.cohort = cohort;
  }

  bio() {
    return `My name is ${this.name} and my quirky fact is: ${this.quirkyFact}`;
  }

  role() {
    return `in the ${this.cohort} program.`;
  }
}

class Mentor extends Person {
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }

  role() {
    return `I'm a mentor ${super.role()}`;
  }
}

class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`;
  }

  role() {
    return `I'm a student ${super.role()}`;
  }

}

const bob = new Mentor('Bob Ross', `I'm a happy little acident.`, `Spring 2024`);

const joy = new Student(`Joy Smiley`, `I laugh at everything.`, `Fall 2024`);

console.log(bob.bio());

console.log(bob.role());

console.log(joy.bio());

console.log(joy.role());
