const fs = require( 'fs' );
const path = require( 'path' );

const filepath = path.join( __dirname, 'sample.txt' );

console.log( filepath );

// async non-blocking
fs.readFile( filepath, (error, content) => {
  if( error ) {
    console.log( error.message );
    return;
  }

  console.log( content.toString() );
})