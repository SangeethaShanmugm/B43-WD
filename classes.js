//es5

// function language(name, country) {
//   this.name = name;
//   this.country = country;
//   this.greet = () => {
//     return `Say Hi to ${name}`;
//   };
// }

// var French = new language("French", "France");
// console.log(French.greet());

//es6

class language1 {
  //add declaration
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  greet = () => {
    return `Say Hi to ${name}`;
  };
}

var French = new language1("French", "France");
console.log(French.greet());

//syntax

// classkeyword  className {
//     constructor(){
//         this.varName
//     }
// }

// let ObjectName = new className(values)

//constructor function
function Person() {
  (this.name = "John"), (this.age = 20);
}

// create an object

var person1 = new Person();
var person2 = new Person();
console.log(person1);
console.log(person2);

//creating a class
class PersonName {
  constructor(name) {
    this.name = name;
  }
}

//creating an object
const personOne = new PersonName("Abhishek");
const personTwo = new PersonName("Ahmed");

console.log(personOne);
console.log(personTwo);

//Setters  - set the values of an object   - set
//getters - get the values of an object  - get

class Human {
  constructor(name) {
    this.name = name;
  }

  //getter
  get HumanName() {
    return this.name;
  }

  //setter
  set HumanName(a) {
    this.name = a;
  }
}

let human1 = new Human("Jack");
console.log(human1.name); //Jack

human1.HumanName = "John";
console.log(human1.name); //John
