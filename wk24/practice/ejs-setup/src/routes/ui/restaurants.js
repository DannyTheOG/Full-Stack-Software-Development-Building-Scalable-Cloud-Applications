const express = require( 'express' );
const { 
  getRestaurantsRouter, 
  // getBootstrapCSS 
} = require( '../../controller/ui/restaurants' );

const router = express.Router();


router.get( '/', getRestaurantsRouter );


// router.get( '/bootstrap/dist/css/bootstrap.min.css', getBootstrapCSS );




module.exports = router;