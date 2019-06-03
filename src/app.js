const cors = require('cors');
const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const errorHandler = require('./errorHandler');
const config = require('./config/config');

const usuarioController = require('./controller/usuarioController');

// CORS
app.use(cors(config.cors));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

//ROUTES
app.use('/usuario', usuarioController);


app.use(errorHandler);

module.exports = app;