module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id :{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        stock: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        description:{
            type: Sequelize.STRING
        },
        brand:{
            type: Sequelize.STRING
        },
        imageURL:{
            type: Sequelize.STRING
        }
    });
  
    return Product;
  };