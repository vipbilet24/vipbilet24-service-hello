const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8081 });

server.start((err) => {
  if (err) {
    throw err;
    process.exit(1);
  }
  server.route({
    method: 'GET',
    path: '/hello',
    handler: function(req, replay) {
      replay("Hello")
    }
  });
  console.log('Server run ' + server.info.uri);
});
