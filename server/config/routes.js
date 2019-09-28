const express = require('express')
const curso = require('../api/curso')
const contato = require('../api/contato')

module.exports = function (server) {
    //definir a URL base para todas as rotas
    const router = express.Router();
    server.use('/api', router);
    //rotas relacionadas às operações com cursos e contatos
    curso.register(router, '/curso');
    contato.register(router, '/contato')
};