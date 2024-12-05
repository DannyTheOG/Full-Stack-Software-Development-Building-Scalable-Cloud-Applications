/*
    the splice() method can be used to remove or add multiple elements from or into an array. 
*/

let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
]


// for removal, the index for removal and the number of elements to remove
days.splice( 2, 2 )
console.log( days )


// for adding, the actual elements to be added also have to be passed with the index and number of elements to be added. 
days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
]

days.splice( 5, 0, "saturday", "sunday" )
console.log( days )


// the slice() method is used to create a copy of the array from a particular index
days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
]

let result = days.slice( 2, 4 ) // returns elements from index 2 to 4 but not 4
// let result = days.slice( 2 ) // returns elements from index 2 to end of array
console.log( result )