const path = require( 'path' );

const getHomeRouter = ( req, res) => {

  // res.send( 'home, GET router...' );

  // path.join() is that it ensures that file paths are constructed correctly regardless of the operating system on which the application is running
  res.sendFile( path.join( process.cwd(), 'public/index.html') );
}


const postHomeRouter = ( req, res ) => {

  res.send( 'home, POST router...' );
}


// const getBootstrapCSS = ( req, res ) => {

//   res.sendFile( path.join( process.cwd(), 'public/bootstrap/dist/css/bootstrap.min.css') )
// }


module.exports = {
  getHomeRouter,
  postHomeRouter,
  // getBootstrapCSS
}