
var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.send("Hello World");
    response.end();
}).listen(5000);

console.log("done");
