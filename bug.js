const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Uncommon bug:  Improper error handling in the requestListener function.
//If an error occurs during request processing, it's not handled properly.
//This leads to silent failures, making debugging difficult.

//Example of Unhandled error:

//Try to access undefined property
//const myVar = req.undefinedProperty;
//console.log(myVar); // will produce TypeError