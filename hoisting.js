// var a = 10;
// console.log(a);

//block - {}
//scope - lifetime variable
// {
//   let y1 = 10;
//   var y2 = 20;
// }
// console.log(y1);

// not defined(error) vs undefined(value)

//declaration - var a
//assigment - a = 50
// console.log(a); // undefined
// var a = 50;
// console.log(a); // 50

//JIT - Just In Time Compilation
// JS  - Does compilation happens? Yes
//code - binary code

// 2phases
// 1. compilation Phase
// 2. Execution Phase

//JS , context
//  compilation Phase
// console.log(a); //Skip
// var a = 50; //JS -> Do you know a? No | What is value? -> context - undefined
// console.log(a); //skip

// 2. Execution Phase
console.log(a); //JS -> Do you know a? yes | What is value? -undefined
//1000 lines of code
var a = 50; //JS -> Do you know a? yes | Note down - context - a -> 50
console.log(a); //JS -> Do you know a? yes | What is value? - 50

// console.log(a1);
// let a1 = 50;
// console.log(a1);

//Compilation Phase

console.log(a1); //skip
let a1 = 50; //JS -> Do you know a1? No | What is value? -> context - dont initialize
console.log(a1); //skip

//Execution Phase

console.log(a1); //JS -> Do you know a1? yes | What is value? - context - error - not defined
let a1 = 50;
console.log(a1);

// var - we can redeclare and reassign
//let - we cannot redeclare but can reassign
//const - we cannot redeclare nor reassign

// var b = 10;
// var b = 11;
// console.log(b);

// var b = 10;
// b = 11;
// console.log(b);

// let b = 10;
// b = 11;
// console.log(b);

// const b = 10;
// b = 11;
// console.log(b);
