/**
    Write a function called displayName() that takes an object as an argument and prints the person's first and last name. Use object destructuring in the function argument. And also, use template strings when printing the first and last name.

    Ex object is-

 
    const person = {

        first: 'Virat',

        last: 'Kohli',

        twitter: '@vkohli',

        company: 'Cricketer'

    }
*/

const person = {

    first: 'Virat',

    last: 'Kohli',

    twitter: '@vkohli',

    company: 'Cricketer'

}

function displayName( firstname, surname ) {
    const name = `${firstname} ${surname}`;
    console.log( name );
}

const { first: firstname, last: surname } = person;
displayName( firstname, surname );


// alternative
// rename variable with object destructuring
function displayNameAlt( {first: firstname, last: surname} ) {
    const name = `${firstname} ${surname}`;
    console.log( name );
}
displayNameAlt( person );
