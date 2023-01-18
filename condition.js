// =  -> assignment
// ==  -> compare the data
// ===  -> compare data and datatype

// var a = 10; // assignment
// var b = "10";
// var c = 20;

// a == b; //true
// a === b; //false

// var a = "hello";
// var b = "hi";
// a == b; //false
// a === b; // false

// var a = true;
// var b = 1;

// // true - 1
// // false - 0
// a == b; // true
// a === b; // false

var a = 10;
var b = 20;

a > b; // 10 > 20 =>  false
b > a; // true
a >= b; // 10 >= 20 => false
console.log(a >= b); // false
console.log(a <= b); // 10 <= 20 => true

//true  - true
// false  -false
//!true - false
// !false - true

a != b; // 10 != 20 => true
console.log(a !== b);
// a = b; // 10 = 20 => false
// console.log(a != b); // true
// console.log((a = b));
// a !== b; //  true
// a == b; // 10 == 20 //true
// console.log(a == b); // false
// console.log(a !== b); // false

// ! = negation

var a = true;

!a; // false

var b = false;
!b; // true

var a = 1; // true
var b = 0; // false

!a; // false
!b; // true

var a = -1;
console.log(!a); // false

var a = "hi";
console.log(!a); // false

// ==> truthy  ->  any number except 0 whether +e or -ve , true, any string
// falsy =>  0, false, null, undefined
