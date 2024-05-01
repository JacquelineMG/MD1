// whereCanIPark() returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot

// Regular cars can only park in R spots
// Small cars can park in R or S spots
// Motorcycles can park in R, S, or M spots

// lower case spots are unavailable


const whereCanIPark = function(spots, vehicle) {
  const vehicleLC = vehicle.toLowerCase();

  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {

      if (vehicleLC === "regular" && spots[y][x] === "R") {
        return [x, y];
      } else if (vehicleLC === "small" && (spots[y][x] === "R" || spots[y][x] === "S")) {
        return [x, y];
      } else if (vehicleLC === "motorcycle" && (spots[y][x] === "R" ||  spots[y][x] === "S" || spots[y][x] === "M")) {
        return [x, y];
      }
    }
  }
  return false;
};


const spots1 = [
  // COLUMNS ARE X
  // 0    1    2    3    4    5
  ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
  ['s', 'M', 's', 'S', 'r', 'M'], // 1
  ['s', 'M', 's', 'S', 'r', 'm'], // 2
  ['S', 'r', 's', 'm', 'r', 'M'], // 3
  ['S', 'r', 's', 'm', 'r', 'M'], // 4
  ['S', 'r', 'S', 'M', 'M', 'S']  // 5
];

const spots2 =   [
  ['M', 'M', 'M', 'M'],
  ['M', 's', 'M', 'M'],
  ['M', 'M', 'M', 'M'],
  ['M', 'M', 'r', 'M']
];

const spots3 = [
  ['s', 's', 's', 's', 's', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['S', 'r', 's', 'm', 'r', 's'],
  ['S', 'r', 's', 'm', 'R', 's'],
  ['S', 'r', 'S', 'M', 'm', 'S']
];


console.log(whereCanIPark(spots1, 'regular'));
console.log(whereCanIPark(spots2, 'small'));
console.log(whereCanIPark(spots3, 'motorcycle'));
