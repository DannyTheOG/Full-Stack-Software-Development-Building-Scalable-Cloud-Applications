let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
]

days.push( "saturday", "sunday" )

console.log( days )

days.pop() // removes sunday
let poppedData = days.pop() // removes saturday

console.log( "poppedData - ", poppedData )
console.log( days )
