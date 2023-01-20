//object shothand => key and value name must be same

const age = 20;
const batch = "B43WD";
const mark = 90;
// const student = {
//   name: "John",
//   age: age, //20
//   batch: batch, //B43WD
// };

// console.log(student);

//object shorthand

const student = {
  name: "John",
  age,
  batch,
  score: mark,
};

console.log(student);

//object destructuring

// var { name, age, batch, score } = {
//   name: "John",
//   age: 20,
//   batch: "B43WD",
//   score: 80,
// };

//ex

var employee = {
  firstname: "John",
  lastname: "Doe",
  dob: 1990,
};

//destructuring the object
var { firstname, lastname, dob } = employee;
console.log(firstname, lastname, dob);

let person = {
  firstname1: "John",
  lastname1: "Doe",
};

// let firstname = person.firstname;
// let lastname = person.lastname;

//es6
let { firstname1, lastname1 } = person;
console.log(firstname1);
console.log(lastname1);

const student1 = {
  name: "John",
  age,
  batch,
  score: mark,
};

function printDetails(student1) {
  return (
    student1.name +
    " has got " +
    student1.score +
    " and he belongs to " +
    student1.batch
  );
}

console.log(printDetails(student1));

//destructuring

function printDetails1(student1) {
  const { name, score, batch } = student1;
  return name + " has got " + score + " and he belongs to " + batch;
}

console.log(printDetails1(student1));

//destrcu in argument itself
function printDetails2({ name, score, batch }) {
  // const { name, score, batch } = student1;
  return name + " has got " + score + " and he belongs to " + batch;
}

console.log(printDetails2(student1));

//es6 destructure
//Template literals `` and interpolation => ${}

function printDetails2({ name, score, batch }) {
  return `${name} has got ${score} and he belongs to ${batch}`;
}

console.log(printDetails2(student1));

//Arrow function + Template literals + Destructuring

const printDetails3 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

console.log(printDetails3(student1));
