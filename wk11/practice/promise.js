/**
    a promise is a special JS object that acts as a container for future values and it's used to handle asynchronous operations. it is created using a 'constructor' function.
*/

function sum( a, b ) {
    const promise = new Promise( ( resolve, reject) => {
        if( typeof a !== 'number' || typeof b !== 'number' ) {
            reject( new Error( 'a and b must be numbers' ) );
        }

        setTimeout( function() {   
            resolve( a + b ); // resolve function is called after 5 seconds.
        }, 5000 );

    })

    return promise;
}

// christmas tree problem is solved using promises.
const promise = sum( 1, 2 );
promise
    .then( result => { 
        console.log( result );  
        return sum( result, 3 );
    } )
    .then( newResult => { console.log(newResult); } )
    .catch( error => { console.log( error.message ); } );