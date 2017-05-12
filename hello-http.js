//this is a nodeJS sample to run server created by ktzi
//to run (assuming u install nodejs in your windows)
//cmd
//cd desktop->trainings->cloud.java->foundation->sample code
//node hello-http.js
//copy the url to your browser
//viola!

//Load the http module to create an http server.
var http = require('http');
//configure out http server to respond with Hello World to all requests.
var server=http.createServer(function(request, response){
 response.writeHead(200,{"Content-Type":"text/plain"});
 response.end("Hello World\ncreated by ktzi");
//response.end("created by Kat");
});
//Listen on port8000, IP defaults to 127.0.0.1
server.listen(8000);
//console.log is document.write for cmd
//put a friendly message on the terminal
console.log("server running at http://127.0.0.1:8000/");


//load other modules
var m2 = require('./hello-world.js'); // ./ basically says module is located on the folder as this file


//samplejs.js module
var m3 = require('./samplejs.js');
m3();