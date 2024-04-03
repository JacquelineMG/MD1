const arrayString = ["John", "Bob", "Alice", "Mary"];
console.log(arrayString.sort());

const arrayNum = [10, 2, 5, 1, 9];
console.log(arrayNum.sort((a,b) => a - b));


const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 5, name: "alex",     age: 22 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// a sorting function that sorts the above array first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.

const compare = function(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  if (a.name === b.name) {
    if (a.age < b.age) {
      return 1;
    }
    if (a.age > b.age) {
      return -1;
    }
  }
  return 0;
};

console.log(students.sort(compare));