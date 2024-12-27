/**
    callback hell is the main disadvantage of callback. 
    it is resulted from nested callbacks and can decrease code readability and maintainability.
    
    promises are used to solve this problem.
 */

function sum( a, b, callback ) {
    setTimeout( function() {   
        callback( a + b ); // callback function is called after 5 seconds.
    }, 5000 );
    return; // this return is not necessary, return undefined by default.
}

// christmas tree problem
console.log( sum( 1, 2, function ( result ) {
    console.log( result );

    sum( result, 3, function ( newResult ) {
        console.log( newResult );

        sum( newResult, 4, function ( finalResult ) {
            console.log( finalResult );
        } );
    } );
} ) );

// refer to promise.js for the solution using promises.