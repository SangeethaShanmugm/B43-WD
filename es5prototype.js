function human(name, city) {
  this.name = name;
  this.city = city;
}

function robot(name, country) {
  this.name = name;
  this.age = 10;
  this.country = country;
}

var Priya = new human("Priya", "Paris");
//human  = {name: 'Priya', city: 'Paris}
console.log(Priya.city);

human.prototype = new robot("Priya", "France");
// robot {name: 'Priya', age: 10, country: "France"}

var Priya = new human("Priya", "Paris");
console.log(Priya);

console.log(Priya.country);

// constructor function
function Person() {
  (this.name = "John"), (this.age = 20);
}

//creating an object
const person1 = new Person();
const person2 = new Person();
console.log(person1);
//add gender
Person.prototype.gender = "male";

//prototype value of person
console.log(Person.prototype);

//inheriting the property of prototype
console.log(person1.gender);
console.log(person2.gender);

//Prototype is used to provide additional property to all the objects created
