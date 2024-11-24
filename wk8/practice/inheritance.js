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

/* 
    similar to Java, JS also uses the 'extends' keyword for inheritance from a class.

    the parent class is also known as the 'super' class. 
    
    when referring to the parent class properties, methods or constructors, we can use the 'super' keyword instead, which will point to the direct parent class of the current class.
*/

class Employee extends Person {
    constructor( name, age, role, department ) {
        super( name, age );

        this.role = role;
        this.department = department;
    }

    celebrateBirthday() {
        super.celebrateBirthday()
        console.log( "Happy BornDay " );
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

}

let john = new Employee( "John Moore", 87, "Developer", "IT" );
console.log( john );

john.celebrateBirthday();
john.promote();

console.log( john );

