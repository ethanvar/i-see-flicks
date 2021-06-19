//const { text } = require("body-parser");

const express = require('express');
const path = require('path');
const fs = require("fs");

let router = express.Router();

/*$.getJSON("movie-data-short.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

var movies = {}
var titles = {}
var years = {}
var genres = {}
var minratings = {}

json.forEach(c=> {
    movies[c.Title] = c
    titles[c.Title.toUpperCase()] = 1;
    years[c.Year.toUpperCase()] = 1;
    genres[c.Genre.toUpperCase()] = 1;
    minratings[c.imdbRating] = 1;
})

console.log(movies)*/

var movies = [{"Title" : "incredibles"},
                {"Title" : "avengers"},
                {"Title" : "transformers"},
                {"Title" : "toy Story"},
                {"Title" : "inception"},
                {"Title" : "wolf of wall street"},
                {"Title" : "benchwarmers"},
                {"Title" : "apollo 13"},
                {"Title" : "uncut gems"},
                {"Title" : "grown ups"},
                {"Title" : "jumanji"},
                {"Title" : "grumpier old men"},
                {"Title" : "father of the bride part I"},
                {"Title" : "father of the bride part II"},
                {"Title" : "toy story"},
                {"Title" : "waiting to exhale"},
                {"Title" : "tom and huck"},
                {"Title" : "heat"},
                {"Title" : "sabrina"},
                {"Title" : "sudden death"},
                {"Title" : "goldeneye"}

];


//let movieData = require("/movie-data-short.json");

/*var title = {}
movieData.forEach(c=> {
    title[c.Title.toUpperCase()] = c;
});*/


var searchMovie = document.getElementById("search");
searchMovie.addEventListener("input", (event) => {
    let value = event.target.value;
    if (value && value.length >= 1) {
        value = value.toLowerCase();
        fillMovieList(movies.filter(movie => {
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
        location.href = "/viewMovie/" + encodeURIComponent("title") + '=' + encodeURIComponent(upperText) + "&"
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
















