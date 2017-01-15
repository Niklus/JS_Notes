// Load http module
var http = require('http');

//Create HTTP server 
var server = http.createServer(function(req,res){
  
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello World"
  res.end('Hello World');
});

//Listen for requests on port 3000
server.listen(3000);

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:3000/');