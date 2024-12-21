let obj = {
    age: 1 // "own property" of obj
}

let prototype = {
    height: 172
}

Object.setPrototypeOf( obj, prototype );
console.log( obj );
console.log( "obj", obj.height ); // inherited property



let obj2 = {
    weight: 190 // "own property" of obj2
}

Object.setPrototypeOf( obj2, prototype );
console.log( obj2 );
console.log( "obj2: ", obj2.height ); // inherited property


prototype.height = 123

// prototype chain
console.log( "obj: ", obj.height ); // inherited property
console.log( "obj2: ", obj2.height ); // inherited property


