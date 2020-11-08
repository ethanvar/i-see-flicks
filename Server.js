
const express = require('express');
const app = express();
var path = require('path');


app.set("view engine", "pug");
/*app.set("views", path.join(__dirname, "i-see-flicks"));
app.use(express.static(__dirname));
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'Movie_Project.html'));
}); */

app.get("/", (req, res, next)=> { res.render("Movie_Project"); });

app.listen(3000);
console.log('Server running at http://localhost:3000');


