const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];

const evens = numbers.filter(num => num % 2 === 0);
const odds = numbers.filter(num => num % 2 !== 0);

console.log("Subset of even numbers:", evens);
console.log("Subset of odd numbers:", odds);