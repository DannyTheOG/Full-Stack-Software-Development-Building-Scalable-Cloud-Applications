/*
    Create an object 
    var obj=[
        {name:"One",val:55},
        {name:"Two",val:48},
        {name:"Three",val:2},
        {name:"Four",val:105},
        {name:"Five",val:65},
    ]
*/

// Use forEach method to print only the objects having even val in the above array of objects.
var obj = [
    {name: "One", val: 55},
    {name: "Two", val: 48},
    {name: "Three", val: 2},
    {name: "Four", val: 105},
    {name: "Five", val: 65},
]

// Use Filter method to create a new array of object having val greater than 50. And print that new array of object.
obj.forEach( function( item ) {
    if( item.val % 2 == 0 )
        console.log( item)
} )

var result = obj.filter( function( item ) {
    return item.val > 50
} )
console.log( result )

// Use the map method to create a new array of objects having val as the square of its initial val and print that new array of objects.
var squares = obj.map( function( item ) {
    item.val = item.val ** 2
    return item
} )
console.log( squares )