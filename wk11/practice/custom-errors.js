function sum( a, b ) {
    if ( typeof a === 'number' && typeof b === 'number' ) {
        return a + b;
    }

    throw new Error( 'Both parameters must be numbers' );
}

try {
    console.log( sum( 2, 3 ) ); // 5
    console.log( sum( 2 , '3' ) ); // Throws error
} catch ( error ) {
    console.error( error );
    // console.error( error.message );
}