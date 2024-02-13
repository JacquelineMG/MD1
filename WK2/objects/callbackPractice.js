const searchArr = function(array, callback1, callback2) {
  array.forEach((ele) => {
    if (ele === true) {
      callback1(ele);
    }
    if (ele === "orange") {
      callback2(ele);
    }
  });
};

const array1 = ["blue", "purple", "Orange", true];

const array2 = ["blue", "purple", "orange", true];

const callback1 = function(e) {
  console.log(`callback1 has run! ${e} found!`);
};

const callback2 = function(e) {
  console.log(`callback2 has run! ${e} found!`);
};

console.log("ARRAY1");
searchArr(array1, callback1, callback2);
console.log("ARRAY2");
searchArr(array2, callback1, callback2);