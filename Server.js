
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'Movie_Project.html'));
});



app.listen(3000);
console.log('Server running at http://localhost:3000');


