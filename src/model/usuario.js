module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'CDUSUARIO',
        },
        name: {
            type: type.STRING,
            field: 'NMUSUARIO'
        }
    }, {
        tableName: 'ESEGUSUARIO',
        timestamps: false
    })
};