const checkAir = function(samples, threshold) {
  const sampleSize = samples.length;
  let count = 0;
  let result = 0;

  for (const s of samples) {
    if (s === 'dirty') {
      count++;
    }
  }
  result = count / sampleSize;
  
  if (result <  threshold) {
    return 'Clean';
  }
  return 'Polluted';
};

const sample1 = ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'];
const threshold1 = 0.3;

const sample2 = ['dirty', 'dirty', 'dirty', 'dirty', 'clean'];
const threshold2 = 0.2;

const sample3 = ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'];
const threshold3 = 0.9;

console.log(checkAir(sample1, threshold1));
console.log(checkAir(sample2, threshold2));
console.log(checkAir(sample3, threshold3));
