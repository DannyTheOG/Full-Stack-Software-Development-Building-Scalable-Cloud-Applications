/*
    encapsulation is a way of data hiding
    refers to wrapping data with methods that act on the data
    this restricts direct access to data from outside the class
*/

/*
    getters and setters methods are used to retrieve and update the restricted attributes of the objects.
*/
class Person {
    constructor( name, age ) {
        let _name = name;
        let _age = age;

        this.getName = function() {
            return _name;
        }

        this.setName = function( newName ) {
            _name = newName;
        }
    }   
}


let john = new Person( "John Moore", 78 );
john.name = "new name";
console.log( john.name );

console.log( john.getName )

