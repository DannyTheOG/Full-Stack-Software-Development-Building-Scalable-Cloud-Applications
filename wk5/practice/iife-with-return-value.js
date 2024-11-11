const someVariable = ( function() {
    return 100;
} )();

console.log( someVariable );


/*
    in the above, someVariable is not being assigned a function
    someVariable is being assigned the return value of the IIFE
*/