const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    fs.readFile('./index.html', (err, data) => {
        response.writeHead(200, {'Content-Type' : "text/html"});
        response.write(data);
        response.end();
    });
});

server.listen(3000, '127.0.0.1');
