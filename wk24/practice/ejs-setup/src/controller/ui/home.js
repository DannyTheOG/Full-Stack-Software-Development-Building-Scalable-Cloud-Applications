const path = require( 'path' );

const getHomeRouter = ( req, res) => {

  res.render( 'index', {
    appTitle: req.app.get( 'title' ),
    title: req.app.get( 'title' )
  });
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