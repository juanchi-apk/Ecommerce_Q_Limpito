const dbConfig = require("./config.js");
const Sequelize = require("sequelize");
require('dotenv').config();

const {DB, USERDB, PASSWORD, HOST, DIALECT} = process.env;
const sequelize_new = new Sequelize(DB, USERDB, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
});

limpito_db ={};
limpito_db.Sequelize = Sequelize;
limpito_db.sequelize = sequelize_new;

limpito_db.prueba = require("./models/prueba.js")(sequelize_new, Sequelize);
limpito_db.product = require("./models/product.js")(sequelize_new, Sequelize);



// Para relacionarlos hacemos un destructuring
const {product} = limpito_db;

module.exports = limpito_db;

