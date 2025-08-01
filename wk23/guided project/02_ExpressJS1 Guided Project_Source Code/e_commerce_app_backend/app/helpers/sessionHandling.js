const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY, TOKEN_EXPIRATION_DURATION } = require('../constants')

function generatingSessionToken(userId) {
    /* WRITE YOUR CODE HERE */
    return jwt.sign( 
        { userId }, 
        JWT_SECRET_KEY, 
        { expiresIn: TOKEN_EXPIRATION_DURATION } 
    );
}

function decodingSessionToken(req, res, next) {
    /* WRITE YOUR CODE HERE */
}

module.exports = {
    generatingSessionToken,
    decodingSessionToken
};