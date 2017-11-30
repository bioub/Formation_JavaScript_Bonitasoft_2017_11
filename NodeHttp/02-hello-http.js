const http = require('http');

const server = http.createServer();

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Le port 1234 est déjà occupé');
  }
});


server.on('listening', () => {
  console.log('Server started');
});

server.on('request', (req, res) => {
  if (req.url === '/') {
    return res.end('<p>Hello</p>');
  }

  if (req.url === '/redirect') {
    res.statusCode = 301;
    res.setHeader('Location', 'http://www.google.com');
    return res.end('');
  }

  res.statusCode = 404;
  res.end('<p>404 Not Found</p>');
});

server.listen(1234);
