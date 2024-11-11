/**
    in JS, functions are first-class citizens. Functions have similar functionality as objects, 
    such as they can be assigned to variables, passed in as arguments or returned from a function.
 */


function someFunction( callback ) {
    var x = 9, y = 7;
    var sum = x + y;

    callback();

    function returnFunction() {
        console.log( "return function" );
    }

    return returnFunction;
}

function testFunction() {
    console.log( "test function" );
}

var result = someFunction( testFunction );

result();