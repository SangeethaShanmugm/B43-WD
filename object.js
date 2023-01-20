var a = {}; // object
var b = []; // array

var movieName = "The Avengers";
var movieRating = 5;
var movieType = "Action";

var movieName1 = "Jab we met";
var movieRating1 = 4.5;
var movieType1 = "Romantic";

//object  => {key: "value"}

var movie = {
  name: "Avengers",
  rating: 5,
  type: "Action",
};

console.log(typeof movie); //object
console.log(movie.name); // Avengers
console.log(movie.rating); //5
console.log(movie.type); //Action

//Array of objects
//[{},{}]
// const movie = [
//   {
//     name: "Avengers",
//     rating: 5,
//     type: "Action",
//   },
//   {
//     name: "Avengers1",
//     rating: 5.2,
//     type: "Romantic",
//   },
// ];

//JSON - Javascript Object Notation => {"key": "value"}

//nested object

const student = {
  name: "Abhishek",
  age: 20,
  marks: {
    science: 80,
    physics: 90,
    mobile: {
      user1: 1234,
      user2: 5678,
    },
  },
};

//access student object  =>  objectName.key

console.log(student.marks.science); // 80
console.log(student.marks.mobile.user1); // 1234

var movie = {
  name: "Avengers",
  rating: 5,
  type: "Action",
};

for (key in movie) {
  console.log(movie[key]);
}


