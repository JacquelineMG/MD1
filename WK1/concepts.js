// joinList takes an array list of things learned and joins them into a string.

const joinList = function(listArr) {
  if (listArr.length < 1) {
    return "";
  }
  let string = listArr[0];
  for (let i = 1; i < listArr.length - 1; i++) {
    string += `, ${listArr[i]}`;
  }
  return string;
};

//Test Examples:
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

const catList = ["Ronnie", "Pip", "Mr. Orange", "Shadow"];
const cats = joinList(catList);
console.log(`The neighbourhood cats are named ${cats}.`);

const emptyList = [];
const empty = joinList(emptyList);
console.log(`This list is empty: ${empty}!`);

