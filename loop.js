//for of

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"];

for (mycity of city) {
  console.log(mycity);
}

let marks = [90, 100, 95];
//            0   1    2

for (score of marks) {
  score = score + 5;
  console.log(score);
}
// score - [90 +5 , 100 + 5, 95 + 5]
// [95, 105, 100]

var city = [
  "Delhi",
  "Mumbai",
  ["Red", "Yellow", "Orange"],
  "London",
  "Amsterdam",
];

for (mycity of city) {
  if (Array.isArray(mycity)) {
    for (mycolor of mycity) {
      console.log(mycolor);
    }
  } else {
    console.log(mycity);
  }
}

//for in
//{}

var movie = {
  name: "The Avengers",
  rating: 5,
  type: "Action",
};

for (key in movie) {
  // console.log(key);
  console.log(movie[key]);
}

const color = ["Red", "Pink", "Yellow"];

color.forEach((ele) => console.log(ele));

var myObj = {
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
  cars2: {
    car1: "Ford2",
    car2: "BMW2",
    car3: "Fiat2",
  },
};

for (x in myObj) {
  console.log(myObj[x].car2);
}

Object.values(myObj).forEach((i) => console.log(i.car1));

//JSON stringify
var students = {
  name: "John",
  age: 30,
};

const myJson = JSON.stringify(students);
console.log(myJson);
