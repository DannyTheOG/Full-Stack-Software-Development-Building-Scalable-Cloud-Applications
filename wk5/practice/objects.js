var person = {
    title: "Mr.",
    firstName: "Daniel",
    surname: "Hammond",
    hobbies: [
        "reading",
        "swimming",
        "football"
    ]
};

console.log( person );


/*
    if object property contains space or special characters,
    surround the property key with double quotes
*/

var person = {
    title: "Mr.",
    firstName: "Daniel",
    surname: "Hammond",
    "favorite sports": [
        "football",
        "basketball",
        "american football"
    ],
    "academic records": {
        bachelors: "Second Class Upper Division",
        wassce: "4As 4Bs",
        bece: "6Ones 2Twos 1Three"
    }
};

console.log( person );


/* access to object properties */

console.log( person.firstName );

console.log( person["favorite sports"] );

console.log( person["academic records"].bachelors );


person.age = 10;

person.celebrateBirthday = function() { // this is the context of the method
    this.age += 1;
}

person.celebrateBirthday();

console.log( person );

console.log( JSON.stringify( person) ); // convert a JS object to a JSON
