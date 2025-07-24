const path = require( 'path' ); 

const aboutRouter = ( req, res ) => {
  
  // res.send( `about, ${ req.method } router...` )
  
  // path.join() is that it ensures that file paths are constructed correctly regardless of the operating system on which the application is running
  res.sendFile( path.join( process.cwd(), 'public/about.html') );
}


module.exports = {
  aboutRouter
}