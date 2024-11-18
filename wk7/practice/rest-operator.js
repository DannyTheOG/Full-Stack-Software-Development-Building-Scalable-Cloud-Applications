// when declaring a function's argument
function sortNumbers( ...numbers ) {
    console.log( numbers );
    return numbers.sort();
}

const result = sortNumbers( 34, 3, 17, 4, 12 );
console.log( result );


// array destructuring
const days = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
]

/*
 similar to function arguments, the rest operator has to be placed at the end of the array destructuring code. 
 doing otherwise generates an error.
*/
const [first, second, third, fourth, fifth, ...weekends] = days;
console.log ( first, second, third, weekends);



// object destructuring
const john = {
    name: "John",
    age: 98,
    emails: [
        "john@gmail.com",
        "joe@gmail.com"
    ],
    hobbies: [
        "swimming",
        "reading"
    ],
    address: {
        city: "london",
        postCode: "SW3 44T",
        street: "45 Hollywood Road"
    }
}

/* 
    if any part of an object is accessed even partially, 
    the remaining part of the object property/array/nestedObject will not be destructed by the '...' operator.
*/
const { name, age : yearsOld, emails : [primaryEmail], ...otherDetails } = john;
console.log( name, yearsOld, otherDetails );