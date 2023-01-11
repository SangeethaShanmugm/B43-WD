//copy by value - primitive datatype

var a = 10;
var b = a;
a = 20;
console.log(a, b);

//copy by reference - composite - function, array, object

var a1 = [1, 2, 3];
var a2 = a1;
console.log(a2[1]); // 2

var a1 = [1, 2, 3];
var a2 = a1;
a2[1] = 5;
console.log(a2); // 1, 5, 3

var x = 10;
console.log(x);
console.log(window.x);
console.log(this.x);
//this  === window(object)
//[] - array
//{} - object
//[{}] - array of objects
//[""] - array of strings
