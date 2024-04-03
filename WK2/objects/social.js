// functions to assess given data object

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06", "f05"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// printAll outputs a list of everyone and for each of them, the names of who they follow and who follows them
const printAll = function(dataOb) {
  let newOb = {};
  let name = "";
  let followsList = {};
  let followersList = {};

  for (const d in dataOb) {

    for (const f of dataOb[d].follows) {
      followsList = dataOb[f].name;
   
      name = dataOb[d].name;

      // make followersList object
      if (followersList[followsList]) {
        followersList[followsList] += `, ${name}`;
      } else {
        followersList[followsList] = name;
      }
      
      if (newOb[name]) {
        newOb[name].follows += `, ${followsList}`;
        newOb[name].followers = followersList[name];
      } else {
        newOb[name] = {
          follows: followsList,
        };
      }
    }

  }
  for (let x in newOb) {
    newOb[x].followers = followersList[x];
  }
  console.log("Print All:", newOb);
};

printAll(data);


// mostPopular returns the name of individual who is most followed
const mostPopular = function(dataOb) {
  const tallyOb = {};
  let result = "";
  let current = 0;

  for (const d in dataOb) {
    const followsAr = dataOb[d].follows;

    for (const f of followsAr) {
      if (tallyOb[f]) {
        tallyOb[f] += 1;
      } else {
        tallyOb[f] = 1;
      }
    }
  }
  for (const t in tallyOb) {
    if (tallyOb[t] > current) {
      current = tallyOb[t];
      result = t;
    }
  }
  return dataOb[result].name;
};

const result2 = mostPopular(data);
console.log("Most Popular:", result2);

// biggestFollower returns the name of individual who follows the most people
const biggestFollower = function(dataOb) {
  let result = "";
  let current = 0;

  for (const d in dataOb) {
    const followsAr = dataOb[d].follows;

    if (followsAr.length > current) {
      current = followsAr.length;
      result = dataOb[d].name;
    }
  }
  return result;
};

const result1 = biggestFollower(data);
console.log("Biggest Follower:", result1);