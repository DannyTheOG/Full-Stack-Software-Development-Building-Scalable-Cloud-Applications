const UserModel = require("../../models/userModel");
const UserSessionModel = require("../../models/userSessionModel");

const findUserByUsername = async (username) => {
  /*WRITE YOUR CODE HERE */
  try {
    return await UserModel.findOne({
      username: username,
      isActive: true
    });

  } catch( error ) {
    throw new Error( `Error finding user by username: ${ error.message }` );
  }
};

const createUser = async (userData) => {
  /*WRITE YOUR CODE HERE */
  try {
    return await UserModel.create( userData );

  } catch( err ) {
    throw new Error( `Error while creating user: ${ err.message }` );
  }
};

const findUserById = async (id) => {
  /*WRITE YOUR CODE HERE */
  try {
    return await UserModel.findOne({
      _id: id,
    });

  } catch( err ) {
    throw new Error( `Error while fetching user: ${ err.message }` );
  }
};

const findActiveUsers = async () => {
  /*WRITE YOUR CODE HERE */
  try {
    return await UserModel.find({
      isActive: true
    });

  } catch( err ) {
    throw new Error( `Error while fetching users: ${ err.message }` );
  }
};

const findActiveUserSession = async (userId, sessionToken) => {
  /*WRITE YOUR CODE HERE */
  try {
    return await UserSessionModel.findOne({
      userId: userId,
      sessionToken: sessionToken,
      isActive: true
    });

  } catch( err ) {
    throw new Error( `Error while fetching user session: ${ err.message }` );
  }
};

const createUserSession = async (sessionData) => {
  /*WRITE YOUR CODE HERE */
  try {
    return await UserSessionModel.create( sessionData );
  } catch (err) {
    throw new Error(`Error while creating user session: ${err.message}`);
  }
};

const deactivateUserSession = async (userSessionObject) => {
  /*WRITE YOUR CODE HERE */
  try {
    userSessionObject.isActive = false;

    return userSessionObject.save();
  } catch (err) {
    throw new Error(`Error while deactivating user session: ${err.message}`);
  }
};

const updateUser = async (id, updateData) => {
  try {
    return await UserModel.findByIdAndUpdate(id, updateData, { new: true });
  } catch (err) {
    throw new Error(`Error while updating user: ${err.message}`);
  }
};

const deleteUser = async (id) => {
  try {
    return await UserModel.findByIdAndUpdate(id, { isActive: false });
  } catch (err) {
    throw new Error(`Error while deleting user: ${err.message}`);
  }
};

module.exports = {
  findUserByUsername,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  findActiveUsers,
  findActiveUserSession,
  createUserSession,
  deactivateUserSession,
};
