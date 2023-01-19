// used to expand or spread an iterable or an array

// spread operator - ...
const arr = ["My", "name", "is", "Jack"];
console.log(arr);
console.log(...arr);
console.log("My", "name", "is", "Jack");

//copy the elements into a single array
const arr1 = ["one", "two"];
const arr2 = [...arr1, "three", "four"];

console.log(arr2);
// ["one", "two", "three", "four"]

var a1 = [1, 2, 3];
var a2 = a1; //copy by reference

console.log(a1); //[1, 2, 3]
console.log(a2); // [1, 2, 3]

//insert 4- element into a1 at end
a1.push(4);

console.log(a1); //[1, 2, 3, 4]
console.log(a2); //[1, 2, 3, 4]

//clone Array

var a1 = [1, 2, 3];
//copy using spread operator
var a2 = [...a1];
console.log(a1); //[1, 2, 3]
console.log(a2); // [1, 2, 3]

//insert 4- element into a1 at end
a1.push(4);

console.log(a1); //[1, 2, 3, 4]
console.log(a2); //[1, 2, 3]
