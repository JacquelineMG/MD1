// const countDownFrom = (num) => {
//   if (num === 1) {
//     console.log(num);
//   } else {
//     console.log(num);
//     countDownFrom(num - 1);
//   }
// };

// countDownFrom(10);


const categories = [
  {id: "animals", parent: null},
  {id: "mammals", parent: "animals"},
  {id: "cats", parent: "mammals"},
  {id: "dogs", parent: "mammals"},
  {id: "chihuahua", parent: "dogs"},
  {id: "labrador", parent: "dogs"},
  {id: "persian", parent: "cats"},
  {id: "siamese", parent: "cats"}
];

// const makeTree = (cat, parent) => {
//   let node = {};

//   for (let c of cat) {
//     if (c.parent === parent) {
//       node[c.id] = makeTree(cat, c.id);
//     }
//   }
//   return node;
// };

const makeTree = (cat, parent) => {
  let node = {};

  cat
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] =
      makeTree(cat, c.id));

  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));