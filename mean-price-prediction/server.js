const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Response text');
});

server.listen(process.env.PORT || 9001);
