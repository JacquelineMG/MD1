const data = {
  f01: {
    name: "Alice",
    age: 45,
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
  let followersList;

  for (const d in dataOb) {

    for (const f of dataOb[d].follows) {
      followsList = dataOb[f].name;
      
      name = dataOb[d].name;
      
      if (newOb[name]) {
        newOb[name].follows += `, ${followsList}`;
        newOb[name].followers += "";
      }
      if (!newOb[name]) {
        newOb[name] = {
          follows: followsList,
          followers: ""
        };
      }
    }

  }
  console.log("Result:", newOb);
};

printAll(data);