/*
const http = require('http')
const fs = require('fs')

let server = http.createServer(function (request, response) {
  console.log("URL: " + request.url); 

  if (request.method === 'GET') {
    if (request.url === '/' || request.url ===  '/Movie_Project.html' ) {
        fs.readFile('index.html', function(err, data) {
          response.statusCode = 200;
          response.setHeader("Content-Type", 'text/html')
          response.end(data)

        })
    }
    else if (request.url === '/' || request.url ==='/MovieProject.js') {
        fs.readFile('MovieProject.js', function(err, data){
            response.statusCode = 200;
            response.setHeader("Content-Type", 'application/javascript')
            response.end(data);  
        })
    }
    
    else if (request.url === '/' || request.url ==='/Movie_Project.css') {
        fs.readFile('Movie_Project.css', function(err, data){
            response.statusCode = 200;
            response.setHeader("Content-Type", 'style/css')
            response.end(data);  
        })
    } 
 
  }

})

server.listen(3000);

console.log('Server running at http://127.0.0.1:3000');*/

//1.1
const http = require('http');

//2.1
const fs = require("fs");

/*const express = require('express')

var path = require('path');

var app = express();

app.use(express.static('i-see-flicks'));
*/
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
				response.setHeader("Content-Type", "style/css");
				response.end(data);
			});
		}
        //5.2
	}
	//4.5
});
//1.3
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');