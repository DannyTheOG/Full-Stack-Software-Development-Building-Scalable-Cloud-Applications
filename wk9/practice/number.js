console.log( Number )

// second argument is the number system (base). base 10(decimal) by default
let int = Number.parseInt( "3.56", 10 )
console.log( int )

int = Number.parseInt( "3a4", 16 )
console.log( int )


let float = Number.parseFloat( "3.56", 10 )
console.log( float )


// toFixed() method returns the number with a specified number of decimal values after the decimal point by rounding off the decimal value.
let number = 3.5678
console.log( number.toFixed( 3 ) )


// NaN, the isNaN() method returns 'false' if the value provided as an argument is a number and 'true' if the value is not a number.
console.log( NaN )
console.log( NaN === NaN )  // false : the only value in JS that returns false when compared with its self

let result = 1 / "hey"
console.log( isNaN( result ) )