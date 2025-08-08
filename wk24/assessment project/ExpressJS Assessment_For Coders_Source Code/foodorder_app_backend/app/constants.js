const JWT_SECRET_KEY = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';

const SERVER_PORT = 8080;

// const DATABASE_URI = 'mongodb+srv://DannyTheOG:P%40%24s1234@cluster0.xivlcdu.mongodb.net/food_order_app'

const DATABASE_URI = 'mongodb+srv://'+ process.env.DB_USER +':'+ process.env.DB_PASS +'@cluster0.xivlcdu.mongodb.net/food_order_app'

const TOKEN_EXPIRATION_DURATION = '7d';

module.exports = {
    JWT_SECRET_KEY,
    SERVER_PORT,
    DATABASE_URI,
    TOKEN_EXPIRATION_DURATION
}