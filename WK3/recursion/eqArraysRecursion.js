// eqArraysRec compares two arrays and uses recursion to handle comparing nested arrays


const eqArraysRec = function(arr1, arr2) {
  if (arr1.length !== arr2.length)  {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && eqArraysRec(arr1[i], arr2[i]) === false) {
      return false;
    }
    if (!Array.isArray(arr1[i]) && arr1[i] !== arr2[i]) {
      return false;
    }
    
  }
  return true;
};


//Test Cases
// console.log(eqArraysRec([[2, 3], [4]], [[2, 3], [4]])); // => true
// console.log(eqArraysRec([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
// console.log(eqArraysRec([[2, 3], [4]], [[2, 3], 4])); // => false

module.exports = eqArraysRec;