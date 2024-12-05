let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
]

// unshift adds to the beginning of the array
days.unshift( "sunday" )
console.log( days )


// shift removes from the beginning of the array
let poppedData = days.shift() // removes sunday

console.log( "poppedData", poppedData )
console.log( days )


