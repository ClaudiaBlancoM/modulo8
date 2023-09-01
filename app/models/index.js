const db = require('../config/db.config');
const Usuario = require('../models/user.model');
const Bootcamp = require('../models/bootcamp.model');

Usuario.belongsToMany(Bootcamp, {through:'User_Bootcamp'}) 
Bootcamp.belongsToMany(Usuario, {through:'User_Bootcamp'})

try {
    db.sync()
} catch(err) {
    console.error('Something went wrong on sync tables', error);
}

module.exports = { Usuario, Bootcamp };