
/*
const express = require('express');
const path = require('path');
const fs = require("fs");

let router = express.Router();
*/
var users = [
    {name: 'A', password: '1234'},
    {name: "B", password: '1234'},
    {name: "C", password: '1234'}
];


function doesExist(newUser) {
    let exist = false;
    users.forEach(item => {
        if (item.name === newUser.name) {
            exist = true;
        }
    })
     
     return exist;
}

function createNewAccount() {
    location.href = "/SignUp";
}

function createUser(newUser) {
    console.log("checking validity of name and password");
    if (newUser.name === null || newUser.password === null) {
        console.log('Nothing Entered');
        return null;
    }
    console.log("Checking validity of existence");
    if (doesExist(newUser)) {
        console.log('Not Valid');
        return null;
    }


    console.log("It is working, proceed! ");
    console.log("New user: ");

    console.log(newUser);
    console.log("Adding new user ");
    users.push(newUser);

    console.log("The User database: ");
    console.log(users);
}

function newAccount() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("psw").value;
    createUser({name: x, password: y})
}

function goHome(){
    href = location.href = "Movie_Project.html"
}

function userProfile() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("psw").value;
    console.log(x);
    console.log(y);
    if (doesExist({name: x, password: y})) {
        //localStorage.setItem("tesi",x);
        console.log("Access Granted");
        //location.href = "/UserProfile";
        location.href = "/SingIn/" + x;
    }
    else {
        console.log("Access Not Granted");
    }
}

function logIn() {
    location.href = "/SignIn";
}
function logOut() {
    location.href = "/SignIn/logOut"
}
function closeForm() {
    location.href = "/";
}

//module.exports = router;
