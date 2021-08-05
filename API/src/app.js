const express = require('express');
const morgan = require('morgan');
const multer = require('multer'); 
const bodyParser = require("body-parser");
const cors = require("cors");
const hbscode = require('express-handlebars');
const path = require('path');

//CONFIGURATIONS
//Server Inicialization;
const app = express();
//views config
//handlebars config
app.set('views', (path.join(__dirname, 'views')));
console.log()
app.engine('.hbs', hbscode({
      defaultLayout: 'main',
      layoutsDir: path.join(__dirname, 'views', 'layouts'),
      partialsDir: path.join(__dirname, 'views', 'partials'),
      extname:'.hbs'
}));
app.set('view engine','.hbs');



app.set('port', process.env.PORT || 3001);

//cors config
const corsOptions = {
  origin: "http://localhost:3000",
  };
  app.use(cors(corsOptions)); 
  app.use(morgan('dev'));

//multer config
  const multerconfig = multer.diskStorage({
    destination: path.join(__dirname , 'public/images'),
    filename: (req, file, cb)=>{
      cb(null, new Date().getTime() + path.extname(file.originalname));
    }
  });


app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(multer(multerconfig).single('image'));

//routes
app.use(require('./routes/index'));

module.exports = app;