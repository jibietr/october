

var http = require('http');

// there is something with Heroku and ports...


function start() {
  var port = process.env.PORT || 5000;
  http.createServer(function(request,response) {
    console.log("Request received."); 
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(port);
 
  console.log("Server has started");
}

exports.start = start;

