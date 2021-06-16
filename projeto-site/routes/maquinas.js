var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Maquina = require('../models').Maquina;
var env = process.env.NODE_ENV || 'development';

/* Recuperar as últimas N Maquinas */

router.get('/todas', function(req, res) {
        console.log('Recuperando todas as maquinas');
        Maquina.findAndCountAll()
        .then(resultado => {
            res.json(resultado.rows);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
          });
    
});
router.get('/recuperardash/:id', function(req, res) {
    console.log('Recuperando todas as maquinas');
    Maquina.findAndCountAll({
        where: {
            idMaquina: req.params.id
        }
    }).then(resultado => {
        res.json(resultado.rows);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
      });
    
});


module.exports = router;