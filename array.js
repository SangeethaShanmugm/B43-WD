// Array is collection of homegenious as well as heterogenious data types

//homegenious - [1,2,3,4,5], ["hello", "abc"]
//heterogenious - [1,2,, "hello", 'h',12.50, true]

//let a  = ["Hii", "Hello", "test", "code"]  => Array of strings
//let b  = [4, 45, 50, 55,1 ,4]  => Array of Numbers
//let c  = [true, false, true] => Array of Boolean

var a = [4, 5, 6, 7];
console.log(typeof a); //object

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
//index -      0       1          2           3          4
console.log(city[1]);
console.log(city[0]);
console.log(city[4]);

var language = ["english", "tamil", "telugu", "malayalam", "hindi", "marati"];
//                  0           1        2      3            4         5
//display marati
// display malayalam
console.log(language[5], language[3]);
// console.log(language[3]);
console.log(language.join(","));

//push - insert/add - is going to add string at end of the array

console.log(city.push("Boston"));
// ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston"]; // 6
//    0        1           2           3          4            5

console.log(city.length);
//"venice"
console.log(city.push("Venice"));
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston", "Venice"] //7

//pop - delete/remove - last element will be deleted
var city = [
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
console.log(city.pop());
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston"]; // Venice
console.log(city.pop());
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]; // Boston
console.log(city.length); // 5

//unshift - add as first value in array
var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
// console.log(city.unshift("Dubai"));
//["Dubai","Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]

//shift - remove first value in array
// var city = ["Dubai", "Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];
console.log(city.shift());
console.log(city.shift());

//push - insert/add - is going to add string at end of the array
//pop - delete/remove - last element will be deleted
//unshift - add as first value in array
//shift - remove first value in array

//slice
var a = [
  "Dubai",
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//          0       1          2        3          4          5          6           7
console.log(a.slice(1));
//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
console.log(a.slice(2));
//['Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
console.log(a.slice(2, 5));
//['Mumbai', 'Helsinki', 'London']
console.log(a.slice(1, 7));
//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston']

//splice
//syntax - a.splice(startIndex, DeleteCount, values)
//a.splice(2, 2) => remove 2 values from index number 2

var a = [
  "Dubai",
  "Delhi",
  "Mumbai",
  "Helsinki",
  "London",
  "Amsterdam",
  "Boston",
  "Venice",
];
//          0       1          2        3          4          5          6         7
console.log(a.splice(2, 2)); //['Mumbai', 'Helsinki']
//["Dubai","Delhi", "London", "Amsterdam", "Boston", "Venice"]
// 0          1         2            3          4          5
console.log(a.splice(1, 4)); //   ['Delhi', 'London', 'Amsterdam', 'Boston']

var a = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam", "Boston"];
//         0           1        2           3           4         5
console.log(a.splice(3, 0, "Pune", "Nice"));
console.log(a);

//syntax - a.splice(startIndex, DeleteCount, values)

// ['Delhi', 'Mumbai', 'Helsinki', 'Pune', 'Nice', 'London', 'Amsterdam', 'Boston']
//    0          1        2          3      4         5           6          7
console.log(a.splice(1, 1, "Innsburg", "Paris"));
console.log(a);
// ['Delhi', 'Innsburg', 'Paris', 'Helsinki', 'Pune', 'Nice', 'London', 'Amsterdam', 'Boston']
//      0          1        2          3      4         5           6          7            8
a.indexOf("London");
console.log(a.indexOf("London")); // 6

var c = ["a", "b", "c", 1];

var b = [2, "d", "e", "f"];

console.log(c + b); //"a", "b", "c", 12, "d", "e", "f"
//"a", "b", "c", 1 + 2, "d", "e", "f"
//"a", "b", "c", 12, "d", "e", "f"

console.log(c.concat(b)); //["a", "b", "c", 1, 2, "d", "e", "f"]
console.log(b.concat(c)); // [2, "d", "e", "f", "a", "b", "c", 1]

var b = [2, "d", "e", "f"];
console.log(b.reverse());  ['f', 'e', 'd', 2]
 