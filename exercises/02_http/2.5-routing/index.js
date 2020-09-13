const http = require('http');
const fs = require('fs');

const accUrl = {
    "/classical" : "homer.html",
    "/modern" : "bradbury.html",
    "/respond" : "index.html"
}

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (Object.keys(accUrl).includes(url)){
        fs.readFile(acc[url], (err, data) => {
            res.writeHead(200 ,{'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.statusMessage = 'Requested content not found';
        res.end();
    }
}).listen(3000, '127.0.0.1');