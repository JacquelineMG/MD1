const wrapLog = function(callback, name) {

  return function() {

    let params = "";

    for (let arg of arguments) {
      if (params.length) {
        params += `, ${arg}`;
      } else {
        params += arg;
      }
    }
    console.log(`Calculating: ${name}(${params}) => ${callback.apply(name, arguments)}`);
  };
};

const area = function(x, y) {
  return x * y;
};

const logArea = wrapLog(area, "area");

logArea(5, 3);
logArea(3, 2);

const volume = function(x, y, z) {
  return x * y * z;
};

const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2);
logVolume(3, 2, 4);