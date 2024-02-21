// passingGradesOnly takes in an array of grades, filters them and returns only the passing grades

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passingGradesOnly = grades.filter((grade) => grade >= 70);

console.log("Passing grades:", passingGradesOnly);
