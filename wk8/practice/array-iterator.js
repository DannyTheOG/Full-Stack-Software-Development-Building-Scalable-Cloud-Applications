// forEach
let weeklyRota = [
    { day: "monday", hours: 5},
    { day: "tuesday", hours: 6},
    { day: "friday", hours: 5},
    { day: "saturday", hours: 9},
    { day: "sunday", hours: 5},
]

weeklyRota.forEach( function( item ) {
    console.log( item )
} )


/* 
    filter
    the filter() method returns a new array which is a subset of the array it is called on. it does so only if the condition in the function defined in the filter method is satisfied.
    it returns new array
*/
let result = weeklyRota.filter( function( item ) {
    return item.hours >= 6
} )
console.log( result )

// map
let overtime = weeklyRota.map( function( item ) {
    item.hours += 2
    return item
} )
console.log( overtime )