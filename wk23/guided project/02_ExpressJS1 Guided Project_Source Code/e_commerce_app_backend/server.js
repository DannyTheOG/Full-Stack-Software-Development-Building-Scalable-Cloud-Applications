/* WRITE YOUR CODE HERE */
require( 'dotenv' ).config();

const express = require( 'express' );
const cors = require( 'cors' );
const requestParser = require( 'body-parser' );

const { SERVER_PORT } = require( './app/constants');
const connectDatabase = require( './app/database/databaseInit');
const errorHandler = require( './app/middleware/errorHandlers')
const userRouter = require( './app/routes/userRoutes')


const app = express();

connectDatabase();

app.use( cors() );
app.use( express.json() );
app.use( requestParser.json({ limit: '5mb' }) );
app.use( requestParser.urlencoded({ 
  limit: '5mb',
  extended: true,
  parameterLimit: 500
}));
app.use( errorHandler );


// routes
app.use( '/api/v1/users', userRouter );


app.get( '/ping', ( _, res ) => {
  res.status( 200 ).json( {
    message: 'API is running'
  })
});


app.listen( SERVER_PORT, () => {
  console.log( `server is running at http://localhost:${SERVER_PORT}`);
})
