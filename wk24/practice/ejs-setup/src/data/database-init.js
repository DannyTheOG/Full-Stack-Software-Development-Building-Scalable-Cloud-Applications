const mongoose = require( 'mongoose' );

const { DB_NAME, DB_USER, DB_PASS } = process.env;

const connectionString = 'mongodb+srv://'+ DB_USER +':'+ DB_PASS +'@cluster0.xivlcdu.mongodb.net/'+ DB_NAME ;

mongoose.connect( connectionString )
  .then( () => {
    console.log( 'connected to the database successfully');
  })
  .catch( error => {
    console.error( error.message );
    process.exit(1);
  })