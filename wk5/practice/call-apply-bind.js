function greet( message, name ) {
    console.log( this );
    console.log( message + " " + name );
}

greet( "wag1", "OG" );


/**
    call() is used to provide a new context for the this keyword in the function

    syntax of call() in JS is to pass in the context first before the argument list are passed to the function.

    syntax: functionName.call( newContext, args1, args2 )
*/
greet.call( "new context", "wag1", "OG" );


/**
    apply() is the same as call()

    with apply, the remaining arguments are passed as an array.

    if you want to maintain the original context, pass null argument.
 */
var args = ["wag1", "OG"];
greet.apply( "apply context", args );


/**
    bind() method permits you to create a new function from an existing function, 

    change the new function's context and provide any arguments you want the new function to be called with.
*/
var greetWossop = greet.bind( null, "wossop" );
greetWossop( "biggie" );
greetWossop( "craigMac" );