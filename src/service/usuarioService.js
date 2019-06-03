const repository = require('../repository/usuarioRepository');

const service = {
    list: () => {
        return repository.findAll();
    },
    regraDeNegocio: async (name) => {
        const users = await repository.regraDeNegocio(name);

        for (i in users) {
            users[i].teste = "teste";
        }

        return users;
    }
};

module.exports = service;