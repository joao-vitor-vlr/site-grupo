var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').relatorioMaquina;
var env = process.env.NODE_ENV || 'development';

/* Recuperar as últimas N leituras */
router.get('/recuperar/:id', function(req, res, next) {
    console.log('Recuperando processo da maquina desejada');
    Leitura.findAndCountAll({
        where: {
            fkMaquina: req.params.id
        }
    }).then(resultado => {
        res.json(resultado.rows);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});


module.exports = router;
