const person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};


person["phoneNumbers"] = ["1234567", "2345678", "3456789"];

console.log(person["phoneNumbers"] instanceof String);

console.log(Object.keys(person));