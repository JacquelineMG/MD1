const eqArrays = require("../../WK1/lotide/eqArrays");


const eqObjectsRec = (ob1, ob2) => {
  const ob1Keys = Object.keys(ob1);
  const ob2Keys = Object.keys(ob2);

  if (ob1Keys.length !== ob2Keys.length) {
    return false;
  }

  for (const k of ob1Keys) {
    if (Array.isArray(ob1[k]) && Array.isArray(ob2[k])) {
      if (eqArrays(ob1[k], ob2[k]) === false) {
        return false;
      }
    }
    if (typeof ob1[k] === "object" && typeof ob2[k] === "object") {
      if (!eqObjectsRec(ob1[k], ob2[k])) {
        return false;
      }
    } else {
      if (ob1[k] !== ob2[k]) {
        return false;
      }
    }
  }
  return true;
};


// Object Examples
const obj1 = {a: {z: 1}, b: 2};
const obj2 = {a: {z: 1}, b: 2};
const obj3 = { a: { y: 0, z: 1 }, b: 2 };
const obj4 = { a: 1, b: 2 };
const obj5 = { a: 1, b: 2 };
const obj6 = { a: 1, b: 2, c: 3 };


console.log(eqObjectsRec(obj1, obj2)); //true
console.log(eqObjectsRec(obj2, obj3)); //false
console.log(eqObjectsRec(obj3, obj4)); //false
console.log(eqObjectsRec(obj4, obj5)); //true
console.log(eqObjectsRec(obj5, obj6)); //false
