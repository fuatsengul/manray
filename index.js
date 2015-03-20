var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 4000 })

server.route(require('./routes'));

server.start(function () {
  console.log('Server running at:', server.info.uri);
});