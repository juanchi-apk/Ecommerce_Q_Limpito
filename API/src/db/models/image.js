module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("image", {
        id :{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        category:{
            type: Sequelize.STRING
        }
    });
  
    return Image;
  };