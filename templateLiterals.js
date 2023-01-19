//es5

var name = "The Godfather";
var type = "thriller";
var categ = "Hollywood";
var rating = 5;

// The Godfather is an thriller movie with the rating as 5 and from categ Hollywood

//es5
var out = ""+name+" is an "+type+" movie with the rating as "+rating+"  and from categ "+categ+"."
console.log(out)

//es6
//`` => backtick
//${} =>interpolation
 var out = `${name} is an ${type} movie with the rating as ${rating} and from categ ${categ}`
 console.log(out)