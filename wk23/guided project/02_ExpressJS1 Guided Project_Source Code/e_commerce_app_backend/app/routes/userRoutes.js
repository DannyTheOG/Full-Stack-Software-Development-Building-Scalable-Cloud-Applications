/*WRITE YOUR CODE HERE */
const express = require( 'express' );

const { 
  addUser, 
  getAllUsers,
  login,
  logout,
  deleteUser,
  editUser,
  userDetails,
} = require( '../services/userService' );
const { auth, isAdmin } = require( '../middleware/authenticationHandler' );

const userRouter = express.Router();

userRouter.route( '/' ).post( addUser );
userRouter.route( '/login' ).post( login );
userRouter.route( '/logout' ).get( auth, logout );


userRouter.route( '/' ).get( auth, isAdmin, getAllUsers );


userRouter.route( '/:id' ).get( auth, userDetails );
userRouter.route( '/:id' ).put( auth, editUser )
userRouter.route( '/:id' ).delete( auth, isAdmin, deleteUser )


module.exports = userRouter;