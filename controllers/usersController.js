let express = require('express');

let usersController = {
    view: function(require, response) {
        response.render('users');
    },

    upload: function(require, response) {
        response.redirect('/users');
    }
}

module.exports = usersController;