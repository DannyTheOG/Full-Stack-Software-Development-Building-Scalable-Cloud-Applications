// Question 1: Anonymous Function
// Write an anonymous function that takes two numbers as parameters and returns their sum.

var sum = function( x, y ) {
    return x + y;
}

console.log( sum( 4, 5 ) );


// Question 2: IIFE Function
// Write an IIFE (Immediately Invoked Function Expression) that prints "Hello, World!" to the console.

(function() {
    console.log( "Hello, World!" );
})();


// Question 3: Scope - Global and Local
// Write a function that demonstrates the concept of global and local scope. The function should have a local variable and a global variable, and it should print their values.

var globalVariable = "Global Variable";

(function() {
    var localVariable = "Local Variable";
    
    console.log( globalVariable + " " + localVariable );
})();


// Question 4: Anonymous Function as a Parameter
// Write a function that takes an anonymous function as a parameter and invokes it.

function total( x, y, callback ) {
    callback( x, y );
}

total( 4, 5, function( a, b ) {
    console.log( a + b );
});


// Question 5: IIFE Returning a Value
// Write an IIFE that returns the square of a number and assign the result to a variable.

var square = (function( num ) {
    return num * num;
})(5);

console.log( square );


// Question 6: Arrow functions
// Define an arrow function that returns the cube of a number and assign the returned value to a variable.

var cube = ( number ) => {
    return number * number * number;
}

console.log( cube );