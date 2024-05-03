const person = {
  firstName: 'Bob',  // <= property containing data
  lastName:  'Smith', // <= ditto
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  greeting: function(dayType) {
    return `Hello, ${this.fullName()}. I hope you have a ${dayType} day!`;
  }
};



console.log(`Hello, ${person.fullName()}. How are you today?`);

console.log(person.greeting("bad"));

