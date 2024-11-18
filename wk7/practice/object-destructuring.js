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

// creating variable and renaming them from objects
const { name, age : yearsOld } = john;
console.log( name, yearsOld );

// creating variables from arrays within an object
// using array-destructuring
const { emails : [primaryEmail] } = john;
console.log( primaryEmail );

const { emails : [, secondaryEmail] } = john;
console.log( secondaryEmail );

// creating variables from arrays within an object
const { address : { postCode } } = john;
console.log( postCode );

