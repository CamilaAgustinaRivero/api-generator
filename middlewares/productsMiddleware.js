let fs = require('fs');

function productsMiddleware (request, response, next) {
    //Me traigo el JSON
    let database = fs.readFileSync('./apis/products.json', 'utf-8');

    //Defino array id
    let id = [];
    
    //Si el JSON tiene algo lo convierto a array para conocer nuevo id
    if (database.length != 0) {
        id = JSON.parse(database);
    }

    //Defino el producto
    let product = {
        id: id.length,
        name: request.body.name,
        price: request.body.price,
        stock: request.body.stock,
        code: request.body.code
    };

    //Defino array products
    let products = [];

    //Si el JSON esta vacio
    if (database.length == 0) {
        products.push(product);
    }

    //Si el JSON tiene algo lo convierto a array
    else {
        products = JSON.parse(database);
        products.push(product);
    }

    //Convierto ese array a un json nuevo
    let productsJSON = JSON.stringify(products);

    //Lo sobreescribo
    fs.writeFileSync('./apis/products.json', productsJSON);
    next();
}

module.exports = productsMiddleware;