//function statement or function declaration

// function (a) {
//     console.log("a called")
// }

//syntax
//ES5
// keyword nameOfFunction(parameters){
//     return output
// }

//function definition
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
  console.log("b called");
};

