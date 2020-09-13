const http = require('http');
const fs = require('fs');

const acceptHeaders ={
    "*/*" : "data.txt",
    "text/plain" : "data.txt",
    "application/json" : "data.json",
    "application/xml,text/xml" : "data.xml"
}

const server = http.createServer((req, res) => { 
    const reqHeader = req.headers.accept;

    // if (acceptHeaders.hasOwnProperty(reqHeader)) {
    //     fs.readFile(acceptHeaders.reqHeader, (err, data) => {
    if (Object.keys(acceptHeaders).includes(reqHeader)) {
        fs.readFile(acceptHeaders[reqHeader], (err, data) => {
        res.writeHead (200, {'Content-Type' : reqHeader});
        res.write(data);
        res.end();
        });
    } else {
        res.statusCode = 406;
        res.statusMessage = 'Content type not available';
        res.end();
    }
}).listen(3000, '127.0.0.1');