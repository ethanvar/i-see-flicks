const express = require('express');
const path = require('path');
const fs = require("fs");
/*router.get('/', function(req, res){
    res.render(__dirname + '/views/SignIn')
});*/

var users = [
    {id: 1, name: 'A', password: '1234'},
    {id: 2, name: "B", password: '1234'},
    {id: 3, name: "C", password: '1234'}
];

let router = express.Router();

router.use(express.static(__dirname + '../public'));
router.use(express.static("public"));
router.use(express.static(path.join(__dirname, 'public')));
router.use(express.urlencoded({extended: true}));

const session = require('express-session')
router.use(session({
    cookie: {
        maxAge: 500000000000000
    },
    secret: 'Im Batman'

}))


router.use('/', function (req, res, next) {
    console.log(res.session);
    next()
})

//GET post 
router.get('/', logInPage);
router.get('/views/UserProfile/:name', sendUser);
//router.get('/logOut', logOut);

router.post('/logInUser', logInUser);

function logInPage(req, res){
    console.log("inside singin router")
    res.render(__dirname + '/views/SignIn', {session: req.session})
}

function logInUser(req, res) {
    console.log("---------------------------------")
    console.log(" POST /logInUser accessed ")
    console.log("---------------------------------")

    if (session.loggedin == true) {
        res.send("You are already loggin in")
    }
    else {
        let logUser = req.body;
        console.log("User thats trying to log in: " + req.body.name);
        let authenBool = true;
        users.forEach(u=> {
            if (logUser.name == u.name && logUser.password == u.password) {
                console.log("Found the user! Logging him in");
                //req.sessionn.name = logUser.name
                //req.session.loggedin = true;
                console.log("---------------------------------");
                console.log("User has been found, moving on to retrieve the user");
                console.log(`/views/UserProfile/${u.name}`)
                console.log("---------------------------------")

                res.status(200).redirect(`views/UserProfile/${u.name}`)           
            }
        })
        if (authenBool) {
            res.status(401).send("You entered the wrong username of password try again!")
        }
    }
}

function logOut(req, res) {
    req.session.destroy();
    res.redirect('/SignIn')
}

function sendUser(req, res) {
    console.log("-------------------------");
    console.log(" GET /users accessed");
    console.log("-------------------------");
    
    let userID = req.params.name;
    users.forEach(u=> {
        if (userID == u.name) {
            console.log(u);
            console.log("-------------------------");
            console.log("Found the requestsed user, providing profile page");
            console.log("-------------------------")

            res.status(200).render("UserProfile.pug", { user: u, session: req.session})
        }
    })
}

module.exports = router;