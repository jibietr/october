

var http = require('http');
var url = require('url');
// there is something with Heroku and ports...


function start(route, handle) {
  var port = process.env.PORT || 5000;
  http.createServer(function(request,response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for"+ pathname + " received." ); 
   
    request.setEncoding("utf8");
   
    request.addListener("data", function(postDataChunk){
      postData += postDataChunk;
      console.log("Received POST data chunk '" +
       postDataChunk + "'.");
    });
    
    request.addListener("end", function(){
      route(handle, pathname, response);
    });

  }).listen(port);
  console.log("Server has started");
}

exports.start = start;

