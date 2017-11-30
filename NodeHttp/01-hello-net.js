const net = require('net');

const server = net.createServer();

server.on('listening', () => {
  console.log('Server started');
});

server.on('connection', (socket) => {
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Host: localhost\r\n');
  socket.write('\r\n');
  socket.end('<p>Hello</p>\r\n');
});

server.listen(1234);
