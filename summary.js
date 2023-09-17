var destinations = ['sajek', 'coxsbazar', 'nepal', 'bali', 'SP'];

console.log(destinations[2]);
destinations[2] = 'thailand';
console.log(destinations[2]);
var index = destinations.indexOf('bali');

destinations.push('bhutan');
destinations.pop()

// conditions
// <,>, ==, !=, <=, >=
// &&, ||
var fruits = ['apple', 'banana', 'orange'];
fruits[1] = 'kola';
fruits[2] = 'komola';
var positionIndex = fruits.indexOf('kola');
console.log(positionIndex);