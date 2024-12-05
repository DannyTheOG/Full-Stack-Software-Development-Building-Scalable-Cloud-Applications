console.log( Math )

// random() method returns a floating-point number that's greater than or equal to 0 and less than 1.
let random = Math.random()
console.log( random )

// min() and max() methods accept comma-separated values instead of arrays. 
let min = Math.min( 34, 23, 4, 78 )
let max = Math.max( 34, 23, 4, 78 )
console.log( min, max )


// arrays can be split into their constituent values before using as input.
let numbers = [34, 23, 4, 78 ]
min = Math.min.apply( null, numbers  )


// ceil
console.log( "ceil: ", Math.ceil( 3.2 ) )

// floor
console.log( "floor: ", Math.floor( 3.2 ) )

// power
console.log( "power: ", Math.pow( 3, 2 ) )