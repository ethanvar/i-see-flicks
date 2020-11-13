const express = require('express');

let app = express();
app.set('view engine', 'pug');

let movieData = require("./Movies/movie-data-short.json");

var title = {}
var year = {}
var genre = {}
var minrating = {}

movieData.forEach(c=> {
    title[c.Title.toUpperCase()] = c;
    year[c.Year.toUpperCase()] = 1;
    genre[c.Genre.toUpperCase()] = 1;
    minrating[c.imdbRating] = 1;
})

console.log("This is what our newly organizez objects look like: ");
console.log("----------------------------------------------------");
console.log("Title");
console.log(title);
console.log("----------------------------------------------------");
console.log("Year");
console.log(year);
console.log("----------------------------------------------------");
console.log("Genre");
console.log(genre);
console.log("----------------------------------------------------");
console.log("Rating");
console.log(minrating);

app.get("")

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
    for (let Title in title) {
        let currentMovie = title[Title];
        let didweFindourMovie = 
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