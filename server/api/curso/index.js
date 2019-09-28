const Curso = require('./model');

Curso.methods(['get', 'post', 'put', 'delete']);
Curso.updateOptions({ new: true, runValidators: true });

module.exports = Curso;