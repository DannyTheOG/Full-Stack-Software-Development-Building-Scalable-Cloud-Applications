let numbers = new Map( [
    [1, "one"],
    [2, "two"],
    [3, "three"]
] )

console.log( numbers.size )
console.log( numbers.entries() )
console.log( numbers.keys() )
console.log( numbers.values() )

numbers.set( 40, "forty" )
console.log( numbers )

console.log( numbers.get( 40 ) ) // pass map key to the get()

numbers.delete( 2 )
console.log( numbers )

// numbers.clear() resets the map to and empty map


for (let [key, value] of numbers) {
    console.log( `${key} - ${value}` )
}