// Import the http module to create a web server
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header to indicate it's an HTML response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the "Hello, World!" response
    res.end('Hello, World!');
});

// Specify the port and hostname
const port = 3000;
const hostname = '127.0.0.1';

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
