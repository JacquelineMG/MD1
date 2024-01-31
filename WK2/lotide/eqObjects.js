// eqObjects takes in two objects and returns true or false based on a perfect math

const eqArrays = require("../../WK1/lotide/eqArrays");

const eqObjects = function(ob1, ob2) {
  const ob1Keys = Object.keys(ob1);
  const ob2Keys = Object.keys(ob2);

  if (ob1Keys.length !== ob2Keys.length) {
    console.log("step 1");
    return false;
  }

  for (const k of ob1Keys) {
    if (Array.isArray(ob1[k]) && Array.isArray(ob2[k])) {
      if (eqArrays(ob1[k], ob2[k]) === false) {
        return false;
      }
    } else if (ob1[k] !== ob2[k]) {
      return false;
    }
  }
  return true;
};


// Object Examples:
const object1 = {colours: ["red"]};
const object2 = {colours: ["red"]};
const object3 = {colour: "red", temp: "cold", height: "tall", weather: "cloudy"};


console.log("RESULT:", eqObjects(object1, object2));
