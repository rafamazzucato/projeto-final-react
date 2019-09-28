const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useUnifiedTopology', true)
module.exports = mongoose.connect('mongodb://localhost:27017/escola', { useNewUrlParser: true })