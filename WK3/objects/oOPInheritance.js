class Person {

  constructor(name, email, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  bio() {
    return `My name is ${this.name} and my quirky fact is: ${this.quirkyFact}`;
  }

  attendingConference(status, role) {
    this.attendingConference = status;
    if (this.attendingConference === true) {
      this.conferenceRole = role;
    }
  }
}

class Student extends Person {

  enroll(cohort) {
    this.cohort = cohort;
  }
}


class Mentor extends Person {

  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}


const student1 = new Student("Ariel", "fishbowl@cmail.com", "I like cold water swimming.");
student1.enroll(2025);

student1.attendingConference(false, "guest");

console.log(student1.bio());

console.log(student1);


console.log("----------------------------------------------------");
console.log("----------------------------------------------------");

const mentor1 = new Mentor("Ursula", "seaWitch@cmail.com", "I have pet eels.");

console.log(mentor1.bio());

mentor1.attendingConference(true, "speaker");

console.log(mentor1);
