//1.1
/*const http = require('http');

//2.1
const fs = require("fs");

const express = require('express')

var path = require('path');

var app = express();

app.use(express.static('i-see-flicks'));

//1.2

let server = http.createServer(function (request, response) {
	//3.1
	console.log("URL: " + request.url);
    //3.2
    

    function css(request, response) {
        if (request.url === '/Movie_Project.css') {
          response.writeHead(200, {'Content-type' : 'text/css'});
          var fileContents = fs.readFileSync('./Movie_Project.css', {encoding: 'utf8'});
          response.write(fileContents);
        }
      } 

	if (request.method === "GET"){

        
		//3.3
		if (request.url === "/" || request.url === "/Movie_Project.html"){
			//3.4
			fs.readFile("Movie_Project.html", function(err, data){
				//4.1
				if(err){
					response.statusCode = 500;
					response.end("Error reading file.");
					return;
				}
				//4.2
				response.statusCode = 200;
				response.setHeader("Content-Type", "text/html");
				response.end(data);
			});
		}
        //4.3
		else if (request.url === "/MovieProject.js"){
			fs.readFile("MovieProject.js", function(err, data){
				if(err){
					response.statusCode = 500;
					response.end("Error reading file.");
					return;
				}
				response.statusCode = 200;
				response.setHeader("Content-Type", "application/javascript");
				response.end(data);
			});
		}		

		//4.4
		else if (request.url === "/Movie_Project.css"){
			fs.readFile("Movie_Project.css", function(err, data){
				if(err){
					response.statusCode = 500;
					response.end("Error reading image.");
					return;
				}
				response.statusCode = 200;
				response.setHeader("Content-Type", "stylesheets/css");
				response.end(data);
			});
		}
        //5.2
	}
	//4.5
}); 
//1.3
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/'); */

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'Movie_Project.html'));
});

var movies = [{}];

function getSearch(req, res) {
	res.render("Movie_Project.html");
}

function searchForMovie(req, res) {
	let body = req.body;
	console.log(body);
	movies.forEach(m => {
		if (m.Title == body.searchMovie) {
			console.log("Found " + m.Title);
			res.render("Movie_Project.html", {movie : m})
			ret
		}
	})
}

app.listen(3000);
console.log('Server running at http://localhost:3000');


