require('./config/db')
const server = require('./config/server')
const routes = require('./config/routes')

routes(server)