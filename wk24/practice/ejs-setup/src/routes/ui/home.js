const express = require( 'express' );
const { 
  getHomeRouter, 
  postHomeRouter, 
  // getBootstrapCSS 
} = require( '../../controller/ui/home' );

const router = express.Router();


router.get( '/', getHomeRouter );

router.post( '/', postHomeRouter );

// router.get( '/bootstrap/dist/css/bootstrap.min.css', getBootstrapCSS );




module.exports = router;