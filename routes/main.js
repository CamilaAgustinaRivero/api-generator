let express = require ('express');
let router = express.Router();
//Requiero el controlador de main
let mainController = require('../controllers/mainController.js');

//Página principal
router.get('/', mainController.view);

//Exporto la variable para poder compartirla con index.js
module.exports = router;