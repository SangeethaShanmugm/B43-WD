// this => to access a property of an object

var person = {
  name: "John",
  age: 20,
  //accessing name property using this keyword
  greet: function () {
    var lastname = "Smith";
    console.log("The name is" + " " + this.name + " " + lastname);
  },
};

console.log(person.greet());
