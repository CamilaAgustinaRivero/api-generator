const express = require ('express');
require('dotenv').config();
const PORT = process.env.PORT;
let mainRoutes = require('./routes/main.js');
let usersRoutes = require('./routes/users.js');
let productsRoutes = require('./routes/products.js');

const  = express();

//Configuro formularios
.use(express.urlencoded({ extended: false }));
.use(express.json());

//Configuro motor de plantillas
.set('view engine', 'ejs');

//Server
.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});

//Routes
.use('/', mainRoutes);
.use('/users', usersRoutes);
.use('/products', productsRoutes);