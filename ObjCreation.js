// First way to create an object -- Literal notation
var snoopy = {
	species: "beagle",
	age: 10
};

// Second way to create an object using default constructor -- Constructor Notation
var buddy = new Object();
buddy.species = "golden retriever"
buddy.age = 5;

// First way of accessing - Dot Notation
console.log(snoopy.species);
console.log(buddy.species);

//Second way of accessing properties -- Bracket notation
console.log(snoopy["age"]);
console.log(buddy["age"]);