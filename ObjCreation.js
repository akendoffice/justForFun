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

// Start adding methods to your objects
var bob = new Object();
bob.name = "AK";
bob.age = 30;

// Lets add a method this time
bob.setAge = function(newAge){
	bob.age = newAge;
};

console.log(bob.age);
bob.setAge(90);
console.log(bob.age);

bob.getYearOfBirth = function() {
	return 2014 - bob.age;
};

console.log(bob.getYearOfBirth());

//Let's rewrite bob.setAge method using the "this" keyword

bob.setAgeUsingThis = function(age) {
	this.age = age;
}

console.log(bob.age);
bob.setAgeUsingThis(54);
console.log(bob.age);