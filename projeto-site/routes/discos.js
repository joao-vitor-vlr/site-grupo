var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Disco = require('../models').Disco;

/* Recuperar as últimas N Maquinas */
router.get('/todas/:idMaquina', function(req, res) {
	console.log('Recuperando processo da maquina desejada');
    Disco.findAndCountAll({
        where: {
            FkMaquina: req.params.idMaquina
        }
    })
    .then(resultado => {
        res.json(resultado.rows);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });

});


module.exports = router;