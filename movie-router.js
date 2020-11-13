const express = require('express');
const path = require('path');
const fs = require("fs");

let router = express.Router();

let movieData = require("./movie-data-short.json");

var titles = {}
var years = {}
var genres = {}
var minratings = {}

movieData.forEach(c=> {
    titles[c.Title.toUpperCase()] = c;
    years[c.Year.toUpperCase()] = 1;
    genres[c.Genre.toUpperCase()] = 1;
    minratings[c.imdbRating] = 1;
})

console.log("TITLEs: ")
console.log(titles)
console.log("years: ")
console.log(years)
console.log("TITLEs: ")
console.log(titles)
console.log("Minratings: ")
console.log(minratings)

router.get("/viewMovie", parseQuery, getMovies);
//router.get("/viewMovie/:movieTitle", sendMovie);

function parseQuery(req, res, next) {
    req.properParams = {}

    if (req.query.title && title.hasOwnProperty(req.query.title.toUpperCase())) {
        req.properParams.title = req.query.title.toUpperCase;
        console.log("The movies must have title: " + req.query.title.toUpperCase());
    }
    if (req.query.year && year.hasOwnProperty(req.query.year.toUpperCase())) {
        req.properParams.year = req.query.year.toUpperCase;
        console.log("The movies must have year: " + req.query.year.toUpperCase());
    }

    if (req.query.genre && genre.hasOwnProperty(req.genre.title.toUpperCase())) {
        req.properParams.genre = req.query.genre.toUpperCase;
        console.log("The movies must have genre: " + req.query.genre.toUpperCase());
    }
    if (req.query.minrating && minrating.hasOwnProperty(req.query.minrating.toUpperCase())) {
        req.properParams.minrating = req.query.minrating.toUpperCase;
        console.log("The movies must have rating: " + req.query.minrating.toUpperCase());
    }

    next();
}

function getMovies(req, res, next) {
    let finalMovies = [];
    for (let Title in titles) {
        let currentMovie = titles[Title];
        let didweFindourMovie = 
            ((!req.properParams.title) || (req.properParams.title == currentMovie.title.toUpperCase()))
            &&
            ((!req.properParams.year) || (req.properParams.year == currentMovie.year.toUpperCase()))
            &&
            ((!req.properParams.genre) || (req.properParams.genre == currentMovie.genre.toUpperCase()))
            &&
            ((!req.properParams.minrating) || (req.properParams.minrating == currentMovie.minrating.toUpperCase()));
        
        if (didweFindourMovie) {
            finalMovies.push(currentMovie);
        }
    }
    res.format({
        'text/html': function () {
            console.log("The request was HTML.. ")
            if (finalMovies.length == null) {
                res.status(404)
            }
        }
    })
}

router.get('/', function(req, res){
    res.render(__dirname + '/views/viewMovie')
});

module.exports = router;