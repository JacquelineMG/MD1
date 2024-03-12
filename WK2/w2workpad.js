const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f03"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f01"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f02"]
  }
};

const printAll = function(dataOb) {
  let newOb = {};
  let name;
  let followsList;

  for (const d in dataOb) {
    console.log("d:", d);

    for (const f of dataOb[d].follows) {
      console.log("f:", f);
      followsList = [dataOb[f].name];
      console.log(followsList);
    }
    
    name = dataOb[d].name;
    newOb[name] = {};
  }
  console.log(newOb);
};

printAll(data);