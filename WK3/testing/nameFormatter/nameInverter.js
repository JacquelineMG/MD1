// nameInverter() inverts a given name from "first last" to "last, first"

const honorifics = ["Mr.", "Mrs.", "Ms.", "Dr."];

const nameInverter = (name) => {
  if (name === undefined) {
    return "Error";
  }

  name = name.trim();
  let nameArr = [];

  if (name === "") {
    return "";
  }
  
  nameArr = name.split(" ");
  for (const h of honorifics) {
    if (nameArr.length === 1 && nameArr[0] === h) {
      name = "";
    } else {
      if (nameArr.length === 1) {
        name = nameArr[0];
      }
    }

    if (nameArr.length === 2 && nameArr[0] === h) {
      name = `${nameArr[0]} ${nameArr[1]}`;
    } else {
      if (nameArr.length === 2) {
        name = `${nameArr[1]}, ${nameArr[0]}`;
      }
    }

    if (nameArr.length === 3 && nameArr[0] === h) {
      name = `${nameArr[0]} ${nameArr[2]}, ${nameArr[1]}`;
    } else {
      if (nameArr.length === 3) {
        name = `${nameArr[2]}, ${nameArr[0]} ${nameArr[1]}`;
      }
    }
  }

  return name;
};

module.exports = nameInverter;