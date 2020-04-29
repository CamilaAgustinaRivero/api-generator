let express = require('express');

let productsController = {
    view: function(require, response) {
        response.render('products');
    },

    upload: function(require, response) {
        response.redirect('/products');
    }
}

module.exports = productsController;