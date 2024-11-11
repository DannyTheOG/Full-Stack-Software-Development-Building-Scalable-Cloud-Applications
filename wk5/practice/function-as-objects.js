function greet( message, name ) {
    // console.log( this );
    console.log( message + " " + name );
}

greet( "wag1", "OG" );

// instanceof is used check the type of an object
console.log( greet instanceof Object );



// function as object means a function can have properties and methods like an object
greet.repeat = 10;

greet.shout = function() {
    console.log( "shouting" );
}

console.log( greet );

console.log( greet.repeat );

greet.shout();