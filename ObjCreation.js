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

// Why the hell did we need the this keyword, just to replace bob.age to this.age?
// Nope, now you can use the about method to set the age of any object not just bob.

var guru = new Object();
guru.name = "guru";
guru.age = 34;
//Create a method outside with file scope
var setAge = function(age){
	this.age = age;
};
// Add that method as a behaviour to your object which is already existing or for a new object that you are creating
guru.setAge = setAge;

guru.setAge(78);

var mike = new Object();
mike.name = "UUU";
mike.age = 3;

mike.setAge = setAge;
mike.setAge(78);

console.log(mike.age + " " + guru.age);


//You can also create an method for a specific object directly
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;

rectangle.setHeight = function(newHeight){
	this.height = newHeight
};

rectangle.setWidth = function(newWidth){
	this.width = newWidth;
};
rectangle.setHeight(6);
rectangle.setWidth(8);

console.log(rectangle.height + " " + rectangle.width);