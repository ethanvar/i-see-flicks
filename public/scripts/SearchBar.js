const express = require('express');
const path = require('path');
const fs = require("fs");

let router = express.Router();

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
];

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
        movieItem.onclick = function() {redirect()};
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
    location.href = "/viewMovie";
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}




