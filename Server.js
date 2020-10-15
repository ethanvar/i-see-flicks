var http = require('http');
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
});