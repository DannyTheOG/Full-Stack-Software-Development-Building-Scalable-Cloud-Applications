const express = require( "express" );
const {
  jwt,
  secretKey,
  verifyToken
} = require( "./jwt-operations")

const app = express();
app.use( express.json() )


// login route - generates JWT upon successful login
app.post( '/login', ( req, res) => {
  const userCredentials = req.body;
  // console.log( userCredentials )

  // check credentials against a database

  // create a token with user credentials
  const token = jwt.sign( userCredentials, secretKey, { expiresIn: '1h'} );

  res.json({ token });
});


// protected route - requires a valid JWT for access
app.get( '/protected', verifyToken, ( req, res ) => {
  res.json({
    message: "This is a protected route",
    user: req.user
  })
})




const port = process.env.PORT || 3000;

app.listen( port, () => {
  console.log( `server is running on http://localhost:${port}` );
})