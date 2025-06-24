const fs = require( 'fs' );
const path = require( 'path' );

const filepath = path.join( __dirname, 'sample.txt' );

console.log( filepath );

const content = `
i am content written using fs.writeFile().
`

// async non-blocking
// flag is for appending to the content already in the sample file
fs.writeFile( filepath, content, { encoding: 'utf-8', flag: 'a+' }, (error, content) => {
  if( error ) {
    console.log( error.message );
    return;
  }

  console.log( "success" );
})