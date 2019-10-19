//serviços rest
const contato = require('./model');

contato.methods(['get', 'post', 'delete']);
contato.updateOptions({ new: true, runValidators: true });

module.exports = contato;