// given an object array of instructor info, instructorWithLogestName returns the object of the instructor with the longest name
// if two instructors have the longest name, it returns the first one

const instructorWithLongestName = function(instructors) {

  let result = instructors[0];

  for (let i of instructors) {
    if (i.name.length > result.name.length) {
      result = i;
    }
  }
  return result;
};



console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);