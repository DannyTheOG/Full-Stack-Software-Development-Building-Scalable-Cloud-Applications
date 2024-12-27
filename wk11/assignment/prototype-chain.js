function print( string, number ) {
    console.log( `${string} ${number}` );
}

function areaOfSquare( edge ) {
    print( "Area of square is :", edge * edge );
}

function areaOfRectangle( length, width ) {
    print( "Area of rectangle is :", length * width );
}

function areaOfCircle( radius ) {
    print( "Area of circle is :", 3.14 * radius * radius );
}



Object.setPrototypeOf( areaOfSquare, print );
Object.setPrototypeOf( areaOfRectangle, print );
Object.setPrototypeOf( areaOfCircle, print );

areaOfSquare( 2 )
areaOfRectangle( 2, 3 )
areaOfCircle( 2 )