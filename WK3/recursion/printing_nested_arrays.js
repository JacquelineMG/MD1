const printItems = function(arr) {
  for (const a of arr) {
    if (Array.isArray(a)) {
      printItems(a);
    } else {
      console.log(a);
    }
  }


};

const arr1 = ["A", ["B", ["C"]], [["D"]], "E"];

printItems(arr1);