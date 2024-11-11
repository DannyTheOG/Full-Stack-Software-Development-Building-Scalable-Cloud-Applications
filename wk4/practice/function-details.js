'use-strict'

function hello ( x, y ) {
    console.log( x, y );
    console.log( "Happy Coding..." );

    /*
    arguments are array-like objects accessible inside functions. it contains the values of the arguments passed to that function.
    */
    console.log( arguments ); 
}

hello( "hello", "world", "today" );


function sumAll () {
    for ( var i = 0, sum = 0; i < arguments.length; i++ ) {
        sum = sum + arguments[i];        
    }

    return sum;
}

console.log( sumAll( 10, 20 ) );
console.log( sumAll( 10, 20, 30 ) );
console.log( sumAll( 10, 20, 30, 40 ) );
console.log( sumAll( 10, 20, 30, 40, 50 ) );