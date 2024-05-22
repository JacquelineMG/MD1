class Student {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `My name is ${this.name} and my quirky fact is: ${this.quirkyFact}`;
  }
}

class Mentor {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }

  bio() {
    return `My name is ${this.name} and my quirky fact is: ${this.quirkyFact}`;
  }
}