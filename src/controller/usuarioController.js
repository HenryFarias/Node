const router = require("express").Router();
const usuarioService = require('../service/usuarioService');

//MIDDLEWARES
// router.use(jwtMiddleware);

router.get('/', (req, res, next) => {
    usuarioService.list()
        .then((usuarios) => res.status(200).json(usuarios))
        .catch((error) => next(error));
});

router.get('/:name', (req, res, next) => {
    usuarioService.regraDeNegocio(req.params.name)
        .then((users) => res.status(200).json(users))
        .catch((error) => next(error));
});

module.exports = router;