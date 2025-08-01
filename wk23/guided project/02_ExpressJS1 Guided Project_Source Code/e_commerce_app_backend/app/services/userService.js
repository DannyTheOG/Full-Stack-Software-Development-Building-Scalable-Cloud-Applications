const expressAsyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const { generatingSessionToken } = require("../helpers/sessionHandling");
const userRepository = require("../database/repositories/userRepository");
const UserModel = require("../models/userModel");

const addUser = expressAsyncHandler(async (req, res) => {
  /*WRITE YOUR CODE HERE */
  try {
    const { username, fullname, email, password, isAdmin } = req.body;

    // get user details with username
    const existingUser = await userRepository.findUserByUsername( username );

    // if user already exist
    if( existingUser) {
      res.status( 400 );
      throw new Error( 'User Already Exists' );
    }

    // create new user
    const newUser = await userRepository.createUser({
      username: username,
      fullname: fullname,
      email: email,
      password: password, 
      isAdmin: isAdmin
    });

    if( newUser ) {
      res.status( 201 ).json({
        message: 'User created successfully'
      });
    } else {
      res.status( 400 ).json({
        message: 'Unable to create the user'
      });
    }

  } catch( error ) {
    console.error( error.message );
    res.status( 500 ).json({
      message: 'Error while creating the user'
    });
  }
});

const login = expressAsyncHandler(async (req, res) => {
  /*WRITE YOUR CODE HERE */
  try {
    const { username, password } = req.body;
    
    // get user details with username
    const userDetails = await userRepository.findUserByUsername( username );
    // console.log( userDetails )

    // if user details not found
    if( !userDetails ) {
      return res.status( 400 ).json({
        message: "User not found"
      });
    }

    // check if both passwords match
    if( userDetails.password != password ) {
      return res.status( 400 ).json({
        message: "Invalid username and password"
      });
    }

    // get user active session
    let userSession = await userRepository.findActiveUserSession( userDetails._id );

    // if no active session, generate one
    if( !userSession ) {
      const sessionToken = generatingSessionToken( userDetails._id );
      userSession = await userRepository.createUserSession({
        userId: userDetails._id,
        sessionToken: sessionToken
      })
    }

    res.status( 200 ).json({
      message: "User logged in successfully",
      userData: {
        _id: userDetails._id,
        username: userDetails.username,
        fullname: userDetails.fullname,
        email: userDetails.email,
        password: userDetails.password, 
        isAdmin: userDetails.isAdmin,
        sessionToken: userSession.sessionToken
      }
    })

  } catch( err ) {
    // console.error( err );
    res.status(500).json({
      message: "Error processing login request",
      error: err.message,
    });
  }
});

const getAllUsers = expressAsyncHandler(async (req, res) => {
  /*WRITE YOUR CODE HERE */
  try {
    // get all active users
    const users = await userRepository.findActiveUsers();

    res.status( 200 ).json({
      message: 'Success',
      users: users
    });

  } catch( err ) {
    // console.error( err );
    res.status(500).json({
      message: "Error fetching the users",
      error: err.message,
    });
  }
});

const userDetails = expressAsyncHandler(async (req, res) => {
  /*WRITE YOUR CODE HERE */
  try {
    const userId = req.params.id;

    // get user details
    const userDetails = await userRepository.findUserById( userId );

    if( userDetails ) {
      res.status( 200 ).json({
        _id: userDetails._id,
        username: userDetails.username,
        fullname: userDetails.fullname,
        email: userDetails.email,
        password: userDetails.password, 
        isAdmin: userDetails.isAdmin,
      });
    } else {
      res.status( 400 ).json({
        message: "User details not found"
      })
    }

  } catch( err ) {
    // console.error( err );
    res.status(500).json({
      message: "Error fetching user details",
      error: err.message,
    });
  }
});

const logout = expressAsyncHandler(async (req, res) => {
  /*WRITE YOUR CODE HERE */
  try {
    const userId = req.user._id;
    const sessionToken = req.headers.authorization.split(" ")[1];

    // console.log( 'id: ', userId );
    // console.log( 'token: ', sessionToken );

    const userSession = await userRepository.findActiveUserSession( userId, sessionToken );

    if( userSession ) {
      await userRepository.deactivateUserSession( userSession );

      res.status( 200 ).json({
        message: "User is successfully logged out"
      })
    } else {
      res.status( 400 ).json({
        message: "Logout Failed"
      })
    }

  }catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error processing logout request",
      error: err.message,
    });
  }
});

const editUser = expressAsyncHandler(async (req, res) => {
  try {
    const userObject = await userRepository.findUserById(req.params.id);
    if (userObject) {
      userObject.fullname = req.body.fullname || userObject.fullname;
      userObject.isAdmin = req.body.isAdmin || userObject.isAdmin;
      userObject.email = req.body.email || userObject.email;
      userObject.password = req.body.password || userObject.password;

      const updatedUser = await userRepository.updateUser(
        userObject._id,
        userObject
      );
      if (!updatedUser) throw new Error("Unable to update the user details");

      res.status(200).json({
        message: "Details are successfully updated.",
      });
    } else {
      res.status(400);
      throw new Error("Unable to update the user details");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error updating the user details",
      error: err.message,
    });
  }
});

const deleteUserHandler = expressAsyncHandler(async (req, res) => {
  try {
    const userObject = await userRepository.findUserById(req.params.id);
    if (userObject) {
      userObject.isActive = false;
      const userSessionObject = await userRepository.findActiveUserSession(
        userObject._id
      );
      if (userSessionObject) {
        await userRepository.deactivateUserSession(userSessionObject);
      }
      await userRepository.updateUser(userObject._id, userObject);

      res.status(200).json({
        message: "User deleted successfully",
      });
    } else {
      res.status(400);
      throw new Error("Unable to delete the user");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error while deleting the user",
      error: err.message,
    });
  }
});



module.exports = {
  addUser,
  deleteUser: deleteUserHandler,
  editUser,
  getAllUsers,
  userDetails,
  login,
  logout,
};
