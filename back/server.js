var http = require('http')
var app = require('./app.js')
app.set('port', 8080)
var server = http.createServer(app)

server.listen(8080)

