/*
    classes are blueprints for creating objects.
    constructor() method is a unique method for creating and initializing objects created within a class.
*/

class Person {
    constructor( name, age ) {
        console.log( this );

        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

let john = new Person( "John Moore", 87 );
console.log( john );

john.celebrateBirthday();
console.log( john );
