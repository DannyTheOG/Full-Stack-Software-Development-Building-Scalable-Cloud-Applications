/** SORT */
let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
]

days.sort()
console.log( days )

days.reverse()
console.log( days )

console.log( days.indexOf( "monday" ) )

// by default, the sort() method arranges elements after converting them into strings.
let numbers = [ 420, 30, 14, 8, 65, 200 ]
numbers.sort()
console.log( numbers )

numbers.sort( function( x, y ) {
    return x - y; // for ascending order
    // return y - x for descending order
})
console.log( numbers )

// sorting arrays with objects
let projects = [
    {project: "ISO8583", hours: 420},
    {project: "NRA", hours: 30},
    {project: "COVID", hours: 14},
    {project: "INST PAY", hours: 8},
    {project: "USL", hours: 65},
    {project: "USSD", hours: 200}
]

projects.sort( function( x, y ) {
    return y.hours - x.hours
})
console.log( projects )
