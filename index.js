const express = require ('express');
require('dotenv').config();
const PORT = process.env.PORT;
let mainRoutes = require('./routes/main.js');
let usersRoutes = require('./routes/users.js');
let productsRoutes = require('./routes/products.js');

const app = express();

//Configuro formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configuro motor de plantillas
app.set('view engine', 'ejs');

//Server
app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});

//Routes
app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
