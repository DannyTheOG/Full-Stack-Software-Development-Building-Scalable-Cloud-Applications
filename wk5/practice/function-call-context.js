function testFunction() {
    console.log(this)
}

testFunction();

var person = {
    firstName: "Daniel",
    surname: "Hammond",
    hobbies: [
        "reading",
        "swimming",
    ],
    getFullName: function() {
        console.log( this )
    }
};

// 'this' in getFullName() prints the whole person object
person.getFullName();


// after getFullName() is assigned, 'this' prints a different object because of the context
var getFunction = person.getFullName;

getFunction();