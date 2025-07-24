const express = require( 'express' );

const app = express();

const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
})
.on( 'error', error => console.error( error.message) );


app.get( '/', ( req, res ) => {
  console.log( req.method );

  // res.write( 'hello express!' );
  // res.end();

  res.send( 'hello express!, this is a GET request' );
});


app.post( '/', ( req, res ) => {
  console.log( req.method );

  // res.write( 'hello express!' );
  // res.end();

  res.send( 'hello express!, this is a POST request' );
});


app.all( '/about', ( req, res ) => {
  console.log( req.method );

  // res.write( 'hello express!' );
  // res.end();

  res.send( 'hello express!' );
});