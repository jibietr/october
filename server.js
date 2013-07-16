

var http = require('http');
var url = require('url');
// there is something with Heroku and ports...


function start(route, handle) {
  var port = process.env.PORT || 5000;
  http.createServer(function(request,response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for"+ pathname + " received." ); 
    //route request    
    var content = route(handle, pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(content);
    response.end();
  }).listen(port);
 
  console.log("Server has started");
}

exports.start = start;

