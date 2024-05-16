// sphereVolume()will calculate the volume of a sphere given a radius

const sphereVolume = function(radius) {
  return (4 / 3) * Math.PI * (radius ** 3);
};



// coneVolume() will calculate the volume of a cone given a radius and a height

const coneVolume = function(radius, height) {
  return (1 / 3) * Math.PI * (radius ** 2) * height;
};