// example of filter function

const animals = [
  {name: "George", species: "dog"},
  {name: "Carl", species: "cat"},
  {name: "Wheels", species: "hamster"},
  {name: "Romeo", species: "cat"},
  {name: "Maggie", species: "dog"},
];

const findDogs = animal => animal.species === "dog";

const findCats = animal => animal.species === "cat";

const dog = animals.filter(findDogs);
const cat = animals.filter(findCats);

console.log("DOGS:", dog);
console.log("CATS:", cat);