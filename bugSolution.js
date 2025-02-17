const http = require('http');

const requestListener = function (req, res) {
  try {
    // Your request handling logic here
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (error) {
    console.error('Request processing error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

//Improved error handling prevents silent failures and provides useful debugging information.