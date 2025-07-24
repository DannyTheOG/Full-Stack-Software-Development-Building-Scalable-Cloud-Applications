const restaurants = require("../../restaurants");

const getHomeRouter = (req, res) => {
  
  res.send(restaurants);
};

const postHomeRouter = (req, res) => {
  res.send(restaurants[0]);
};

module.exports = {
    getHomeRouter,
    postHomeRouter,
};
