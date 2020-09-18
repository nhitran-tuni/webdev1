const http = require('http');
const fs = require('fs');

const accMethod = {
    "GET" : "get.html",
    "POST" : "post.html"
}

const server = http.createServer((req, res) => {
    const {method, url} = req;

    if(Object.keys(accMethod).includes(method)) {
        fs.readFile(accMethod[method], (err, data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(405, "Allow: GET,POST");
        res.end();
    };
}).listen(3000);