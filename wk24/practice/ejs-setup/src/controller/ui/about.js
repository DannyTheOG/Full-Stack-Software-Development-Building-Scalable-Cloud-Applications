const aboutRouter = ( req, res ) => {
  
  res.render( 'about', {
    appTitle: req.app.get( 'title' ),
    title: 'About | ' + req.app.get( 'title' )
  });
}


module.exports = {
  aboutRouter
}