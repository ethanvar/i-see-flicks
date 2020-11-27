const express = require('express');
const path = require('path');
const fs = require("fs");
const session = require('express-session');
const { response } = require('express');

let file = fs.readFileSync('users.json');
let users = JSON.parse(file);

let router = express.Router();

router.use(express.static(__dirname + '../public'));
router.use(express.static("public"));
router.use(express.static(path.join(__dirname, 'public')));
router.use(express.urlencoded({extended: true}));

/*router.use('/', function (req, res, next) {
    console.log(req.session);
    next()
})*/

router.get('/', signUp);
router.post('/createUser', doesExist, createAUser, userLogin);

function signUp(req, res){
    console.log("inside SignUp router")
    res.render(__dirname + '/views/SignUp', {session: req.session})
}

function doesExist(req, res, next) {
    let createdUser = req.body;
    console.log("Checking to see if user exists");
    let verify = true;
    users.forEach(user=> {
        if (user.name == createdUser.name) {
            res.status(401).send("user already exists")         
        }
    })
    console.log("New user!");
    next();
} 

function createAUser(req, res, next) {
    console.log("POST accessing /createAUSer")
    let createdUser = req.body;
    console.log("Attempting To Create " + req.body.name);
    let verify = true;

    users.push({
		"name": createdUser.name,
		"password" : createdUser.password
	})

    let json = JSON.stringify(users);

    fs.writeFile('users.json', json, 'utf8', function(err) {
        if (err) throw err
        console.log('Done!')
        next();
    })
}

function userLogin(req, res) {
    console.log("POST accessing /userLogin")

    if (session.signedin == true) {
        res.send("It appears you are already logged in")
    }
    else {
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



module.exports = router;