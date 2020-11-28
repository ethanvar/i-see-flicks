const express = require('express');
const path = require('path');
const fs = require("fs");
const session = require('express-session');
const { response } = require('express');

let file = fs.readFileSync('users.json');
let users = JSON.parse(file);

/*router.get('/', function(req, res){
    res.render(__dirname + '/views/SignIn')
});*/

/*var users = [
    {id: 1, name: 'Ethan', password: '1234'},
    {id: 2, name: "Matt", password: '1234'},
    {id: 3, name: "Jacob", password: '1234'}
];*/

let router = express.Router();

router.use(express.static(__dirname + '../public'));
router.use(express.static("public"));
router.use(express.static(path.join(__dirname, 'public')));
router.use(express.urlencoded({extended: true}));

/*router.use(session({
    cookie: {
        maxAge: 700000000000000
    },
    secret: 'Frank Ocean'

}))*/

router.use('/', function (req, res, next) {
    console.log(req.session);
    next()
})

//GET post 
router.get('/', signIn);
//router.get('../:name', updateUser);
//router.get('/logOut', signOut);

router.post('/logInUser', userLogin);

function signIn(req, res){
    console.log("inside SignIn router")
    res.render(__dirname + '/views/SignIn', {session: req.session})
}

function userLogin(req, res) {
    console.log("POST accessing /userLogin")

    if (session.signedin == true) {
        res.send("It appears you are already logged in")
    }
    else {
        users = JSON.parse(file);
        let loginOfUser = req.body;
        console.log("User attempting sign in " + req.body.name);
        let verify = true;
        users.forEach(user=> {
            if (user.name == loginOfUser.name && user.password == loginOfUser.password) {
                console.log("User Found. logging in");
                console.log(req.body)
                req.session.name = user.name
                req.session.password = user.password;
                req.session.signedin = true;
                console.log("User found. Getting the user");
                console.log(loginOfUser.name)

                res.status(200).redirect(`../${user.name}`)           
            }
        })
        if (verify) {
            res.status(401).send("Incorrect username and password")
        }
    }
}

/*function signOut(req, res) {
    console.log("sing out")
    req.session.destroy();
    res.redirect('/')
}*/
/*
function updateUser(req, res) {
    console.log("GET accessing /users");

    let id = req.params.name;
    users.forEach(user=> {
        if (user.name == id) {
            console.log("user found");
            console.log(user);
            console.log("Found specified user. Updating user profile");

            //res.render(__dirname + '/views/UserProfile', { user: user, session: req.session})
            res.status(200).render("UserProfile.pug", {session: req.session, user: user})
        }
    })
}*/

module.exports = router;