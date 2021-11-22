// CONFIGURATION
// TODO: https://stackoverflow.com/questions/47569638/link-to-reading-editing-and-saving-ini-files-in-node-js
var host = 'localhost';
var port = 8080;
var httpRoot = './';
// -------------------------------------------------- //

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    var path = url.parse(req.url).pathname;

    var file = httpRoot + path;
    if (file.endsWith('/')) {
        file += 'index.html';
    }

    var ext = file.split('.').pop();

    if (ext.startsWith('//') || ext.startsWith('./.')) { 
        file += '/index.html'
        var ext = 'html'
    }


    fs.readFile(file, (err, data) => {
        if (err && err.code == 'ENOENT') {
            res.writeHead(404, { 'Content-Type': 'text/raw' });
            res.end('404 Not Found');
            
        } else if (err) {
            // Respond with 418 if an unknown error occurs. 
            res.writeHead(418, { 'Content-Type': 'text/plain' });
            res.end('Something went wrong...');

            console.log('Error: ' + err);
        } else {
            // Set head for specific file types
            if (ext == 'html') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
            } else if (ext == 'css') {
                res.writeHead(200, { 'Content-Type': 'text/css' });
            } else if (ext == 'js') {
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
            } else if (ext == 'png') {
                res.writeHead(200, { 'Content-Type': 'image/png' });
            } else if (ext == 'jpg') {
                res.writeHead(200, { 'Content-Type': 'image/jpg' });
            } else if (ext == 'gif') {
                res.writeHead(200, { 'Content-Type': 'image/gif' });
            } else if (ext == 'svg') {
                res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
            } else if (ext == 'ico') {
                res.writeHead(200, { 'Content-Type': 'image/x-icon' });
            } else if (ext == 'json') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
            }else {
                // If no file type is specified, default to text/plain
                res.writeHead(200, { 'Content-Type': 'text/plain' });
            }
            
            res.write(data);
        } 
        res.end();
    });
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});