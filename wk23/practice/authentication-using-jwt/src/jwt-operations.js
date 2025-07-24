const jwt = require( "jsonwebtoken" );

const secretKey = "1234567890abcdefghijklmnopqrstuvwxyz";

// function to verify if invalid or empty token is passed
const checkUndefinedToken = ( token, res ) => {
  if( !token ) {
    return res.status( 401 ).json( {
      message: "Unauthorized: No token provided."
    })
  }
}


// middleware to verify JWT
const verifyToken = ( req, res, next ) => {
  let token = req.headers.authorization;

  checkUndefinedToken( token, res );

  token = token.split(" ")[1];
  // console.log( "token: ", token );

  checkUndefinedToken( token, res );

  jwt.verify( token, secretKey, ( error, decoded) => {
    // console.log( "error: ", error );
    // console.log( "decoded: ", decoded );
    
    if( error ) {
      return res.status( 401 ).json({
        message: "Unauthorized: Invalid token", 
        error: error
      })
    }

    req.user = decoded; // attach the decoded payload to the request object
    next();
  })
}


module.exports = {
  jwt,
  secretKey,
  verifyToken
}