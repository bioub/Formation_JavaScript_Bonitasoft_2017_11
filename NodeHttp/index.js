const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    return console.log('Le port 1234 est déjà occupé');
  }
  console.log(err.message);
});

server.listen(1234, () => {
  console.log('Server started');
});
