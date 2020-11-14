
const express = require('express');
const app = express();
const pug = require('pug');
const session = require('express-session')

var path = require('path');

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

/*app.use(session({
    cookie: {
        maxAge: 500000000000000
    },
    secret: 'Im Batman'

}))*/

app.use('/', function (req, res, next) {
    console.log(req.session);
    next()
})

let ok = "tetst";
app.get('/', function(req, res) {
    res.render(__dirname + '/views/Movie_Project', {ok : ok})
});

app.get('/SignUp', function(req, res){
    res.render(__dirname + '/views/SignUp')
});

/*let userProfileRouter = require("./userinfo-router");
app.use("/UserProfile", userProfileRouter);*/

let viewMovieRouter = require("./movie-router");
app.use("/viewMovie", viewMovieRouter);

let signInRouter = require("./SignIn-router");
app.use("/SignIn", signInRouter);

//app.use("/LogInUser", signInRouter);

app.get('/Actor', function(req, res){
    res.render(__dirname + '/views/Actor')
});


/*let searchRouter = require("/public/scripts/searchBar");
app.use("/users", userRouter);*/


app.listen(3000, function (req, res) {
    console.log('Server running at http://localhost:3000');
});




