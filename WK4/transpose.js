const transpose = function(matrix) {
  let transposed = [];

  for (let i = 0; i < matrix[0].length; i++) {
    transposed.push([]);
  }
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      transposed[y].push(matrix[x][y]);
    }
  }
  matrix = transposed;
  return matrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));