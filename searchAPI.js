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