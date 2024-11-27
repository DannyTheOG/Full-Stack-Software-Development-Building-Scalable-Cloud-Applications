/*
    a JS set is a collection of unique values, meaning each value can only occur once. set objects can hold any value of any data type and they are iterable.
*/
let primeNumber = new Set( [1, 3, 5, 7, 11, 13] )

console.log( primeNumber.size )

primeNumber.add( 17 )
console.log( primeNumber )

primeNumber.add( 7 )
console.log( primeNumber )

primeNumber.delete( 7 )
console.log( primeNumber )

console.log( primeNumber.has( 5 ) )