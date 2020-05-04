let fs = require('fs');

function usersMiddleware (request, response, next) {
    //Me traigo el JSON
    let database = fs.readFileSync('./apis/users.json', 'utf-8');

    //Defino array id
    let id = [];

    //Si el JSON tiene algo lo convierto a array para conocer nuevo id
    if (database.length != 0) {
        id = JSON.parse(database);
    }

    //Defino el usuario
    let user = {
        id: id.length,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        code: request.body.code
    };

    //Defino array users
    let users = [];

    //Si el JSON esta vacio
    if (database.length == 0) {
        users.push(user);
    }
    //Si el JSON tiene algo lo convierto a array
    else {
        users = JSON.parse(database);
        users.push(user);
    }

    //Convierto ese array a un json nuevo
    let usersJSON = JSON.stringify(users);

    //Lo sobreescribo
    fs.writeFileSync('./apis/users.json', usersJSON);
    next();
}

module.exports = usersMiddleware;