

var http = require('http');
var url = require('url');
// there is something with Heroku and ports...


function start(route) {
  var port = process.env.PORT || 5000;
  http.createServer(function(request,response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for"+ pathname + " received." ); 
    //route request    
    route(pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(port);
 
  console.log("Server has started");
}

exports.start = start;

