function Person( name, age ) {
    this.name = name;
    this.age = age;

    /*
        the function below is also possible but not the best approach
        this creates a new function for each instance of the Person constructor function
        100 instances === 100 function, this wastes space.

        hence the prototyping, to create 1 function to be used by all instances
     */

    // this.celebrateBirthday = function() {
    //     this.age++;
    // }
}

Person.prototype.celebrateBirthday = function() {
    this.age++;
}

let john = new Person( "john", 23 );
john.celebrateBirthday();
console.log( john );
// console.log( john.__proto__ === Person.prototype )



let mary = new Person( "mary", 43 );
mary.celebrateBirthday();
console.log( mary );
// console.log( mary.__proto__ === Person.prototype )