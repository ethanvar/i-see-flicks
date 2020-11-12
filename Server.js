
const express = require('express');
const app = express();
const pug = require('pug');

var path = require('path');

/*app.set("views", path.join(__dirname, "i-see-flicks"));
app.use(express.static(__dirname));
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'Movie_Project.html'));
}); */

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let ok = "tetst";
app.get('/', function(req, res) {
    res.render(__dirname + '/views/Movie_Project', {ok : ok})
});

app.get('/SignUp', function(req, res){
    res.render(__dirname + '/views/SignUp')
});

/*app.get('/UserProfile', function(req, res){
    res.render(__dirname + '/views/UserProfile')
});*/

let userProfileRouter = require("./userinfo-router");
app.use("/UserProfile", userProfileRouter);

app.get('/viewMovie', function(req, res){
    res.render(__dirname + '/views/viewMovie')
});

app.get('/Actor', function(req, res){
    res.render(__dirname + '/views/Actor')
});

app.get('/SignIn', function(req, res){
    res.render(__dirname + '/views/SignIn')
});

/*let searchRouter = require("/public/scripts/searchBar");
app.use("/users", userRouter);*/


app.listen(3000, function (req, res) {
    console.log('Server running at http://localhost:3000');
});




