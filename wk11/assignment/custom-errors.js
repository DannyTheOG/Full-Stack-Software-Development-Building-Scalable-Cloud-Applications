/**
    Write a function which takes two parameters a and b and return the value of a/b.

    You are required to throw the error("Only Numbers are allowed and divisor should be greater than 0 ")  if a or b is not a number or if b is not greater than 0.

    Else print the (“Answer after dividing a by b will be,answer);

    You should call the above function at least 2 time with different value of a and b to cover all edge cases.
*/


function divide( a, b ) {
    if ( typeof a === 'number' && typeof b === 'number' && b > 0 ) {
        const result = a / b;
        return result;
    }

    throw new Error( "Only Numbers are allowed and divisor should be greater than 0" );
}

// Test cases
try {
    console.log( divide( 10, 2 ) ); // Should print: Answer after dividing a by b will be, 5
} catch (error) {
    console.log( error.message );
}


try {
    console.log( divide( 10, 0 ) ); // Should throw an error
} catch (error) {
    console.log( error.message );
}


try {
    console.log( divide( '12', 6 ) ); // Should throw an error
} catch (error) {
    console.log( error.message );
}