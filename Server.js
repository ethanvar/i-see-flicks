
const express = require('express');
const app = express();
const pug = require('pug');
const session = require('express-session')
const fs = require("fs")

var path = require('path');

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let file = fs.readFileSync('users.json');
let users = JSON.parse(file);

app.use(session({
    cookie: {
        maxAge: 700000000000000
    },
    secret: 'Frank Ocean'

}))


app.use('/', function (req, res, next) {
    console.log(req.session);
    next()
})

let ok = "tetst";
app.get('/', function(req, res) {
    res.render(__dirname + '/views/Movie_Project', {ok : ok})
});

/*app.get('/SignUp', function(req, res){
    res.render(__dirname + '/views/SignUp')
});*/

app.get('/logOut', function(req, res){
    console.log("sign out")
    req.session.destroy;
    res.redirect('/SignIn')
});

let viewMovieRouter = require("./movie-router");
app.use("/viewMovie", viewMovieRouter);

let signInRouter = require("./SignIn-router");
app.use("/SignIn", signInRouter);

let signUpRouter = require("./SignUp-router");
app.use("/SignUp", signUpRouter);

app.get('/Actor', function(req, res){
    res.render(__dirname + '/views/Actor')
});

app.get('/:name', updateUser);

function auth(req, res, next) {
    let authorized = 0;
    users.forEach(user=> {
        if (user.name == req.session.name && user.password == req.session.password) {
            authorized = 1;
            next();         
        }
    })
    res.status(401).send("Unauthorized");
}

function updateUser(req, res) {
    console.log("GET accessing /users");

    let id = req.params.name;
    users.forEach(user=> {
        if (user.name == id) {
            console.log("user found");
            console.log(user);
            console.log("Found specified user. Updating user profile");

            res.status(200).render("UserProfile.pug", {session: req.session, user: user})
        }
    })
}

app.listen(3000, function (req, res) {
    console.log('Server running at http://localhost:3000');
});




