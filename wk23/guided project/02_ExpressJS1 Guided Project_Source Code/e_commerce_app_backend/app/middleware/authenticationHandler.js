const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/userModel");
const UserSessionModel = require("../models/userSessionModel");
const { JWT_SECRET_KEY } = require("../constants");

const auth = asyncHandler(async (req, res, next) => {
  /*WRITE YOUR CODE HERE */
  // console.log( req );

  let token;

  if( req.headers.authorization && req.headers.authorization.startsWith( 'Bearer' ) ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const userSession = await UserSessionModel.findOne({
        sessionToken: token,
        isActive: true
      });

      // console.log( userSession )

      if( !userSession ) {
        res.status( 401 );
        throw new Error( "Unauthorized access" );
      }

      // verify jwt
      const decodedSessionToken = jwt.verify( token, JWT_SECRET_KEY );

      // find user using userId from the decoded token
      req.user = await UserModel.findById( decodedSessionToken.userId );

      // console.log( req.user._id )

      // call the next function
      next();

    } catch( err ) {
        res.status( 401 ).json({
          message: "Unauthorized access" 
        });
    }
  } else {
    // console.log("No token found");
    res.status(401).json({
      message: "Unauthorized access",
    });
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  /*WRITE YOUR CODE HERE */
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "Not authorized since you are not admin",
    });
  }
});

module.exports = {
  auth,
  isAdmin,
};
