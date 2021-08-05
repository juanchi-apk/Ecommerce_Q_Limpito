const limpitodb = require('./src/db/connection');
const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
limpitodb.sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
        console.log('%s listening at 3001');
        console.log('Conected to DataBase'); // eslint-disable-line no-console
        });
  })
    .catch((err) =>{
        console.log("Se rompio aca");

        return err;
    });