// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

//COMPLETE YOUR CODE HERE 
function checkEven( num ) {
    if ( num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function filterEvens( array, callback ) {
    var evenArray = [];

    array.forEach(element => {
        if ( callback( element ) ) {
            evenArray.push( element)
        }
    });

    console.log( evenArray );
}

var set = [1, 2, 3, 4, 5];

filterEvens( set, checkEven );

//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

//COMPLETE YOUR CODE HERE 
(function (n) {
    var factorial = 1;

    if (n === 0) {
        console.log( factorial );

    } else if ( n < 0 ) {
        console.log( "Input must be a positive integer" );

    } else {
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        console.log( factorial );
    }        
})( 5 );

//3. The product1 object (which is already given) consists of title, price and category information of Nike Shoes.
// The description() function describes the product using its properties.
// Your task is to create a product2 object which consists of the title, price and category information of Sony TV.
// Next, use the call() method to invoke the description() method of product1 on product2.
// This should display the details of product2 on the console. 
var product1 = {
    title: "Nike Shoes",
    price: 30,
    category: "Shoes",
    description: function (){
        return "Title: " + this.title + " Price: " + this.price + " Category: " + this.category;
    }
}

//COMPLETE YOUR CODE HERE 
var product2 = {
    title: "Sony TV",
    price: 70,
    category: "Electronics"
}

product2.description = product1.description.call( product2 );

console.log( product2 );


//4. Given an array of person objects, define a function to find oldest person object.

persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]

//COMPLETE YOUR CODE HERE 
function oldestPerson( array ) {
    var oldestAgeIndex = 0, oldest = 0;
    for ( let i = 0; i < array.length; i++ ) {
        if ( array[i].age  > oldest ) {
            oldestAgeIndex = i;
        }        
    }

    console.log( array[oldestAgeIndex] )
}

oldestPerson( persons );

//5.  Create a function that calculates the sum of an array using IIFE function and returns it.

//COMPLETE YOUR CODE HERE 
var set = [1, 2, 3, 4, 5];

( function( array ) {
    var total = 0;

    array.forEach(element => {
        total += element;
    });

    console.log( total );
} )( set );

//6. Write a function printContext that, when invoked, logs the this keyword to the console. Then, demonstrate how the context of a function can change when calling it with different objects using the call method.

//COMPLETE YOUR CODE HERE 
function printContext() {
    console.log( this );
}

printContext();

var set = [1, 2, 3, 4, 5];
printContext.call( set );

printContext.call( "Happy Coding!" );


//7. Create a function multiply that takes two parameters and returns their product. Use the bind method to create a new function "double" that multiplies a single parameter by 2.

//COMPLETE YOUR CODE HERE 
function multiply( x, y ) {
    console.log ( x * y );
}

var double = multiply.bind( null, 2 );
double( 1 );
double( 2 );
double( 3 );


// 8. Create an object person with properties name and age. Write a function "introduce" that logs a message introducing the person. Then, use the call method to invoke the introduce function with the person object as the context.

//COMPLETE YOUR CODE HERE 
var person = {
    name: "James",
    age: 20
}

function introduce( x, y ){
    console.log( "Name: " + x + " Age: " + y );
}

introduce.call( person, person.name, person.age );


// 9. Write a higher order function createMultiplier that takes a factor as an argument and returns another functiom that multiplies a number by that factor. 

//COMPLETE YOUR CODE HERE 
function createMultiplier( factor ) {
    return function( number ) {
        return number * factor;
    }
}

var multiplyByFive = createMultiplier( 5 );

console.log( multiplyByFive( 3 ) );

// 10. Write a function called "calculate" that adds two numbers and assign a property "description" to it with a string describing what the function does. Then, access and log this property.

//COMPLETE YOUR CODE HERE 
function calculate( x, y ) {
    return x + y;
}

calculate.description = "This function returns the sum of two numbers";

console.log( calculate.description );
