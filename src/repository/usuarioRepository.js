const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Usuario = require('../model/usuario')(sequelize, Sequelize);
const Op = Sequelize.Op;

Usuario.regraDeNegocio = (name) => Usuario.findAll({
    where: {
        name: {[Op.like]: '%' + name + '%'}
    }
});

module.exports = Usuario;