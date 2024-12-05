/* 
    a string is immutable in JS
    you cannot alter the original string
*/
let quote = "with great power comes great responsibility";

// substring()
let piece = quote.substring( 10, 20 )
// let piece = quote.substring( 10 )
console.log( piece )



// replace()
let replaceQuote = quote.replace( 'responsibility', 'bills' )
console.log( quote )
console.log( replaceQuote )



// split() - separated with a delimiter
let fruits = "apple, orange, pear"
let arr = fruits.split( ", " )
console.log( arr )

/*
    indexOf() - returns the position of the first occurrence of a value in a string.

    lastIndexOf() - returns the position of the last occurrence of a value in a string.

    if no match, returns -1
*/
let firstIndex = quote.indexOf( "great" )
console.log( firstIndex )

let lastIndex = quote.lastIndexOf( "great" )
console.log( lastIndex )