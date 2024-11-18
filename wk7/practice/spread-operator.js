/*
    we use the 'rest' operator when accepting arguments for a function whiles we use the 'spread' operator when calling a function.
*/

let numbers = [34, 3, 17, 4, 12 ];
let max = Math.max( ...numbers );
console.log( max );


// spread items of an array into comma separated values
let arr1 = [1, 2, 3], arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log( arr3 );


// spread properties of an object
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

const johnCopy = {
    ...john
}