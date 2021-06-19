const express = require('express');
const path = require('path');
const fs = require("fs");

console.log("inside the movie-router")

let router = express.Router();

let movieData = require("./movie-data-short.json");

var movies = {}
var titles = {}
var years = {}
var genres = {}
var minratings = {}

movieData.forEach(c=> {
    movies[c.Title] = c;
    titles[c.Title.toUpperCase()] = 1;
    years[c.Year.toUpperCase()] = 1;
    genres[c.Genre.toUpperCase()] = 1;
    minratings[c.imdbRating] = 1;
})

/*console.log("TITLEs: ")
console.log("----------------------------------------------------------")
console.log(titles)
console.log("years: ")
console.log("----------------------------------------------------------")
console.log(years)
console.log("TITLEs: ")
console.log("----------------------------------------------------------")
console.log(titles)
console.log("Minratings: ")
console.log("----------------------------------------------------------")
console.log(minratings)*/

router.get("/viewMovie", getMovies);
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
    console.log("--------------------------------");
    console.log("This is what our organized parameters look like within req.properParams");
    console.log(req.properParams);
    console.log("--------------------------------");

    next();

}
function getMovies(req, res, next) {
    let finalMovies = [];
    for (let Title in movies) {
        let currentMovie = movie[Title];
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
                res.status(404).send(JSON.stringify(finalMovies))
            }
            else {
                res.render('index', {items:finalMovies});
            }
        }
    })
}

function sendMovie(req, res, next) {
    let movieID = req.params.title;
    if (movies.hasOwnProperty(movieID)) {
        res.status(200).render("viewMovie.pug", { movie: movie[movieID], session: req.session})
    }
}

router.get('/', function(req, res){
    res.render(__dirname + '/views/viewMovie')
});

module.exports = router;