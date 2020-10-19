const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    // Remove the line 'res.end();' below when you start your own development
    if (!req.headers.origin) {
        res.setHeader('400','Origin header not in the request');
        res.end();
    }
    const headers = {
        /** TODO: add the required CORS headers */
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'HEAD,GET,POST',
        'Access-Control-Max-Age' : 7200
    };

    // TODO: handle HEAD HTTP method, 
    // remember to add CORS headers to response
    if (req.method === "HEAD") {
        res.writeHead(200, headers);
        res.end();
        return;
    }

    // TODO: handle GET and POST HTTP methods, 
    // remember to add CORS headers to response
    else if (req.method === "POST" || req.method === "GET") {
        res.writeHead(200,headers);
        res.end('I was requested using CORS!');
        return;
    }
    // TODO: handle HTTP methods that are not allowed, 
    // remember to add CORS headers to response
    else {
        res.writeHead(405, headers);
        res.end('Request used a HTTP method which is not allowed.');
        return;
    }

}).listen(port);