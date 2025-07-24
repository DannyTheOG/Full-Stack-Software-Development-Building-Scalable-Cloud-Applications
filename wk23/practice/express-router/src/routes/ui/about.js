const express = require( 'express' );
const { aboutRouter } = require( '../../controller/ui/about' );

const router = express.Router();


router.all( '/about', aboutRouter )





module.exports = router;