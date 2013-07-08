
var http = require('http');

http.createServer(function(request,response){
    response.write("Hello World");
}).listen(5000);

console.log("done");
