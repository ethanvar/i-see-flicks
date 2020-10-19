/*var http = require('http');
var fs = require('fs');
var http = require('http');

const PORT=8080; 

app.use(express.static(path.join(__i-see-flicks, 'public')));

fs.readFile('./Movie_Project.html', function (err, html) {


    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT); 
});*/
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request starting...');

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './Movie_Project.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');