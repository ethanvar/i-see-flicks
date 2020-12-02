const express = require('express');
const path = require('path');
const fs = require("fs");
const session = require('express-session');
const { response } = require('express');

let file = fs.readFileSync('movie-data-short.json');
let movieData = JSON.parse(file);

let router = express.Router();

router.use(express.static(__dirname + '../public'));
router.use(express.static("public"));
router.use(express.static(path.join(__dirname, 'public')));
router.use(express.urlencoded({extended: true}));

/*
$(function () {

    $("#search").autocomplete({
        source: function (request, response) {
           $.ajax({
              url: "/search_member",
              type: "GET",
              data: request,  // request is the value of search input
              success: function (data) {
                // Map response values to fiedl label and value
                 response($.map(data, function (el) {
                    return {
                       label: el.fullname,
                       value: el._id
                    };
                    }));
                 }
              });
           },
           
           // The minimum number of characters a user must type before a search is performed.
           minLength: 1,
           
           // set an onFocus event to show the result on input field when result is focused
           focus: function (event, ui) {
              this.value = ui.item.label;
              // Prevent other event from not being execute
              event.preventDefault();
           },
           select: function (event, ui) {
              // Prevent value from being put in the input:
              this.value = ui.item.label;
              // Set the id to the next input hidden field
              $(this).next("input").val(ui.item.value);
              // Prevent other event from not being execute            
              event.preventDefault();
              // optionnal: submit the form after field has been filled up
              //$('#quicksearch').submit();
           }
    });
  
  });
*/
router.use('/', function (req, res, next) {
    console.log(req.session);
    next()
})
/*
router.get('/', searchMovie);
function movieIn(req, res){
    console.log("inside search router")
    res.render(__dirname + '/views/viewMovie', {session: req.session})
}
*/
var movies = {}
var titles = {}
var years = {}
var genres = {}
var minratings = {}


movieData.forEach(c=> {
    //movies[c.Title] = c;
    movies[c.Title.toUpperCase()] = c;
    years[c.Year.toUpperCase()] = 1;
    genres[c.Genre.toUpperCase()] = 1;
    minratings[c.imdbRating] = 1;
})
/*
var searchMovie = document.getElementById("search");
searchMovie.addEventListener("input", (event) => {
    let value = event.target.value;
    if (value && value.length >= 1) {
        value = value.toLowerCase();
        fillMovieList(movieData.filter(movie => {
            return movie.Title.includes(value);
        }))
    }else if (value && value.length <= 0){
        clearList();
    }
});  

var list = document.getElementById('movieList');

function fillMovieList(collection) {
    clearList();
    for (let movie of collection) {
        var movieItem = document.createElement("li");
        var text = document.createTextNode(movie.Title);
        var upperText = movie.Title.toUpperCase();
        movieItem.onclick = function() { redirect(); };
        //location.href = "/viewMovie/" + encodeURIComponent("title") + '=' + encodeURIComponent(upperText) + "&"
        movieItem.id = text;
        movieItem.appendChild(text);
        list.appendChild(movieItem);
    }
    if (collection.length == 0) {
        NoResultsFound();
    }
}
function NoResultsFound() {
    var movieItem = document.createElement("li");
    var text = document.createTextNode("No results could be found");
    movieItem.id = text;
    movieItem.appendChild(text);
    list.appendChild(movieItem);
}

function redirect() {
    //console.log("this is the" + text)
    location.href = "/viewMovie";
    //location.href = "/viewMovie"
}



function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}



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


router.get("/", parseQuery, getMovies);
router.get("/:movieTitle", updateMovie);

function parseQuery(req, res, next) {
    console.log("in parQuery")
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
    console.log("in getMovies");
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
    console.log("in parQuery")
    let movieID = req.params.title;
    if (movies.hasOwnProperty(movieID)) {
        res.status(200).render("viewMovie.pug", { movie: movie[movieID], session: req.session})
    }
}

/*router.get('/', function(req, res){
    res.render(__dirname + '/views/viewMovie')
});*/

module.exports = router;