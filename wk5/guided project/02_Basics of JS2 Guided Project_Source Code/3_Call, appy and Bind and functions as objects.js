// Question 1: Given a greet() function modify it to update its context with an object
// having firstName and lastName properties.
/*
  function greet(name){
    console.log("Hi" + name + this + "is the original context of the function");
  }
  greet("Ron");
*/

function greet(name){
  console.log("Hi " + name + this + "is the original context of the function");
}

greet("Ron");

var person = {
  firstName: "James",
  lastName: "Martin"
}

greet.call( person, person.firstName );

// Question 2: Given a greet() function modify it to update its context with an object 
// having firstName and lastName properties
// and allow it to accept multiple arguments in an array
/*
  function greet(name, lastName){
   console.log("Hi" + name + " " + lastName + this + "is the original context of the function");
  }
  greet("Ron", "Weasley");
*/

function greet(name, lastName){
  console.log("Hi" + name + " " + lastName + this + "is the original context of the function");
}

greet("Ron", "Weasley");

var person = {
  firstName: "James",
  lastName: "Martin"
}

greet.apply( person, [person.firstName, person.lastName] )


// Question 3: Given a greet() function modify it
//  to update its context with a fixed value so it can be invoked later.
/*
  function greet(name){
    console.log("Hi" + name + this + "is the original context of the function");
  }
  greet("Ron");
*/

function greet(name){
  console.log("Hi" + name + this + "is the original context of the function");
}
greet("Ron");

var greetJames = greet.bind( null, "James" );

greetJames();
  
  
// Question 4: Create a function multiplyBy that multiplies a number by a given factor.
// Use the bind method to create a new function that multiplies by a specific factor.

function multiplyBy( number, factor ) {
  return number * factor;
}

console.log( multiplyBy( 3, 8 ) );

var multiplyByFive = multiplyBy.bind( null, 5 );

console.log( multiplyByFive( 9 ) );
  
  
// Question 5: Create a function that counts the number of properties in an object 
// using `apply` and the `arguments` object.

function countProperties( object ) {
  return Object.keys( object ).length;
}
  
var person = {
  firstName: "James",
  lastName: "Martin"
}

var count = countProperties.apply( null, [person] );

console.log( count );


// Question 6: Given an object `person` representing a person with a method to introduce himself,
// define another object `anotherPerson` and using call method borrow the introduce method from `person` object
// and use it for `anotherPerson` object
  

// Question 7: Using the `apply` method, write a function that finds the minimum number in an array. 
// You can use Math class's built-in min() method for this task.
