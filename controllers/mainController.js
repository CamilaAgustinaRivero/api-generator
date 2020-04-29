let express = require('express');

let mainController = {
    //Cuando accede por get a main
    view: function(require, response) {
        response.render('main');
    }
}

//Exporto el controlador para poder compartirlo con la ruta
module.exports = mainController;