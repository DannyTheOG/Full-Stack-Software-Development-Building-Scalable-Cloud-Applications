function greeting( message = "Hello", name = "world" ) {
    return `${message} ${name}!`
}

console.log( greeting( "Howdy", "john" ) );
console.log( greeting( "Howdy") );
console.log( greeting( undefined, "john" ) );
console.log( greeting() );