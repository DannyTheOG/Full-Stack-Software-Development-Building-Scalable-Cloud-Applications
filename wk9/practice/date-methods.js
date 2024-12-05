let today = new Date()
console.log( today )

let millennium = new Date( 2000, 0, 1)
console.log( millennium )

// using getDate() and setDate()
today.setDate( today.getDate() + 1)
console.log( today )


// getters
console.log( (new Date()).getMonth() ) // January is index 0
console.log(  (new Date()).getDay() ) // Sunday is index 0


// setters
console.log( today.setDate( 7 ) )
console.log( today.setFullYear( 2018 ) )