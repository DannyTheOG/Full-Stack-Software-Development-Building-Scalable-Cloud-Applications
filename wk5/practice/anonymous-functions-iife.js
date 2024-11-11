const sum = function( x, y, callback ) {
    var result = x + y;
    callback( result );
}

function printValue( value ) {
    console.log( value );
}

sum ( 5, 5, printValue );

/*
    instead of creating a new function "printValue",
    you can create it whiles calling the "total" function if you're only going to use it once.
    this is called anonymous function
*/

const total = function( x, y, callback ) {
    var result = x + y;
    callback( result );
}

total( 5, 5, function( result ) {
    console.log( result );
});


/*
    the above can be wrapped into one function (IIFE) to reduce the declaration of global variables.
    Immediately Invoked Function Expression (IIFE) gives the same output


    IIFE syntax
    (function() {

        //statements in function logic

    })();
*/

(function() {
    const total = function( x, y, callback ) {
        var result = x + y;
        callback( result );
    }
    
    total( 5, 5, function( result ) {
        console.log( result );
    });
})();