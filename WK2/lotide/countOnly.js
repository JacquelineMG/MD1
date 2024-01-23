// countOnly takes in a collection of items and returns count for specified subset of those items

//const assertEqual = require("../../WK1/lotide/assertEqual");

const countOnly = function(itemsArr, itemsToCount) {
  let countObj = {};

  for (const i of itemsArr) {
    if (itemsToCount[i]) {
      if (countObj[i]) {
        countObj[i] += 1;
      } else {
        countObj[i] = 1;
      }
    }
  }
  console.log(countObj);
};

// Test Case:

const arr = [1, 2, 4, 2, 3, 3, 3, 4, 2, 1];
const obj = {1: true, 2: false, 3: true, 4: true, 5: true};

countOnly(arr, obj);