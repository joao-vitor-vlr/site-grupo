var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var relatorioDisco = require('../models').RelatorioDisco;
var env = process.env.NODE_ENV || 'development';

/* Recuperar todos os usuários */
router.get('/todos/:idDisco', function(req, res) {
	console.log('Recuperando processo da maquina desejada');
    relatorioDisco.findAndCountAll({
        where: {
            fkDisco: req.params.idDisco
        }
    }).then(resultado => {
        res.json(resultado.rows);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
  
});

module.exports = router;