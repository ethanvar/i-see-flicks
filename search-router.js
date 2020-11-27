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

let movieData = require("./movie-data-short.json");

router.get('/', searchMovie);
function signIn(req, res){
    console.log("inside SignIn router")
    res.render(__dirname + '/views/SignIn', {session: req.session})
}

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

router.get("/viewMovie", parseQuery, getMovies);
router.get("/viewMovie/:movieTitle", updateMovie);

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
    console.log("This is what our organized parameters look like within req.properParams");
    console.log(req.properParams);

    next();

}
function getMovies(req, res, next) {
    let finalMovies = [];
    for (let Title in movies) {
        let currentMovie = movie[Title];
        let didweFindourMovie = 
            ((req.properParams.title == currentMovie.title.toUpperCase()) || (!req.properParams.title))
            &&
            ((req.properParams.year == currentMovie.year.toUpperCase()) || (!req.properParams.year))
            &&
            ((req.properParams.genre == currentMovie.genre.toUpperCase()) || (!req.properParams.genre))
            &&
            ((req.properParams.minrating == currentMovie.minrating.toUpperCase()) || (!req.properParams.minrating));
        
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

function updateMovie(req, res, next) {
    let movieID = req.params.title;
    if (movies.hasOwnProperty(movieID)) {
        res.status(200).render("viewMovie.pug", { movie: movie[movieID], session: req.session})
    }
}

/*router.get('/', function(req, res){
    res.render(__dirname + '/views/viewMovie')
});*/

module.exports = router;