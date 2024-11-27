/*
    polymorphism means ability to behave in different forms
    in OOP, it refers to the ability of an object or function to behave in different forms
*/


/*
    operator overloading
    the ability of the operator to work in different ways depending on the datatype of the operand
*/
// adding two numbers
let total = 9 + 7;
console.log( total )

// concatenating two strings
let greeting = "Howdy! " + "dawg"
console.log( greeting )


/*
    method overloading
    it refers multiple functions with the same name but different number of arguments and behavior
*/
// adding two numbers
function add( a, b ) {
    return a + b;
}

// incrementing a number
function add( a ) {
    return a + 2;
}

console.log( add( 3, 4 ) )
console.log( add( 4 ) )


/*
    method overriding
    to override a method in a child class that is already defined in the parent class
*/
class Shape {
    draw() {
        console.log( "drawing a shape" )
    }
}

class Circle extends Shape {
    draw() {
        console.log( "drawing a circle" )
    }
}

let shape = new Shape();
let circle = new Circle();

console.log( shape.draw() )
console.log( circle.draw() )


/*
    polymorphism with functions and objects
    it is achieved by implementing functions with the same names and arguments in different objects
*/
const rectangle = {
    length: 20,
    width: 10,
    area() {
        console.log( "area of rectangle", this.length * this.width )
    }
}

const square = {
    side: 10,
    area() {
        console.log( "area of square", this.side ** 2 )
    }
}

rectangle.area();
square.area();