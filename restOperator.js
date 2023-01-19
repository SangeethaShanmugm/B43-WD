// when a spread operator is used as a parameter - rest operator|| rest parameter

function sum(x, y, z) {
  console.log(x + y + z);
}

const num1 = [1, 2, 3, 4];

sum(...num1);
//6

var name = function (...args) {
  console.log(args);
};

name(3); //[3]
name(4, 5, 6); // [4, 5, 6]
