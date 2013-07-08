
var http = require('http');

http.createServer(function(request,response){
    response.send("Hello World");
}).listen(5000);

console.log("done");
