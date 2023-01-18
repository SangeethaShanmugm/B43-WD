//function statement or function declaration

// function (a) {
//     console.log("a called")
// }

//syntax
//ES5
// keyword nameOfFunction(parameters){
//     return output
// }

// var a => declaration
// a = 10 =>  assignment

var a = 30;
var b = 50;
if (a > b) {
  console.log("A is greater");
} else {
  console.log("B is greater");
}

function largestNum(a, b) {
  let result;
  if (a > b) {
    result = `A-${a} is greater`;
  } else {
    result = `B-${b} is greater`;
  }
  return result;
}

console.log(largestNum(50, 100));// function call

//function definition /declaration
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 4)); //function call
console.log(add(5, 5, 5));

//function add(a, b, c) - parameters
//add(1, 2, 4) - arguments
// var a = 1;
// var b = 2;
// console.log(a + b);

// var a = 5;
// var b = 5;
// console.log(a + b);

// Anonymous function - a func without name and it doesnt have own identity
//used when the func are used as values
// function (){

// }
//function expression
var b = function () {
  console.log("Hello");
};

b();

//ES6
//arrow function

let addNum = (a, b) => a + b;
// function add(a) {
//   return a
// }
// let a  =(a) => a
console.log(addNum(2, 5));

//greater num a|b
let largeNum = (a, b) => {
  if (a > b) return "a is greater";
  else return "b is greater";
};

console.log(largeNum(5, 10));
//`` - back tick - ` ${var}`
function isEven(num) {
  let out;
  if (num % 2 == 0) {
    out = `Number ${num} is even`;
  } else {
    out = `Number ${num} is odd`;
  }
  return out;
}

console.log(isEven(5));
console.log(isEven(10));

//arrow function
let isEvenNum = (num) => {
  if (num % 2 == 0) {
    out = `Number ${num} is even`;
  } else {
    out = `Number ${num} is odd`;
  }
  return out;
};

console.log(isEvenNum(5));

//IIFE - Immediately invoked function expression

function hello() {
  console.log("Hello Everyone");
}
hello();

//IIFE
(function () {
  console.log("Hello Everyone");
})();
