// sphereVolume()will calculate the volume of a sphere given a radius
const sphereVolume = function(radius) {
  return (4 / 3) * Math.PI * (radius ** 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);


// coneVolume() will calculate the volume of a cone given a radius and a height
const coneVolume = function(radius, height) {
  return (1 / 3) * Math.PI * (radius ** 2) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);


// prismVolume() will calculate the volume of a prism given a height, a width, and a depth
const prismVolume = function(height, width, depth) {
  return (width * depth) * height;
};

console.log(prismVolume(3, 4, 5) === 60);


//  totalVolume() receives an array containing the different shapes that make up a single attraction
// totalVolume uses the previous three functions to calculate the total volume of an attraction.

const totalVolume = function(solids) {
  let total = 0;

  for (const s of solids) {
    if (s.type === 'sphere') {
      total += sphereVolume(s.radius);
    }
    if (s.type === 'cone') {
      total += coneVolume(s.radius, s.height);
    }
    if (s.type === 'prism') {
      total += prismVolume(s.height, s.width, s.depth);
    }
  }
  return total;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
