const { getRestaurants } = require("../../services/restaurants");

const getRestaurantsRouter = ( req, res) => {

  res.render( 'restaurants', {
    appTitle: req.app.get( 'title' ),
    title: 'Restaurants | ' + req.app.get( 'title' ),
    restaurants: getRestaurants()
  });
}


module.exports = {
  getRestaurantsRouter,
  // getBootstrapCSS
}