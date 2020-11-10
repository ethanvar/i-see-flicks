const express = require('express');
const path = require('path');
const fs = require("fs");

let router = express.Router();

//let testingagain =localStorage.getItem(x);

router.get('/', function(req, res){
    res.render(__dirname + '/views/UserProfile', {testingagain: "testingagain"})
});

module.exports = router;
