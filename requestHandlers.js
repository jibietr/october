
var exec = require("child_process").exec;


function start(response) {
  console.log("Request handler 'starter' was called.");  
  
  //function sleep(milliSeconds) {
  //  var startTime = new Date().getTime();
  //  while (new Date().getTime() < startTime + milliSeconds); 
  //}
  //sleep(10000);

  var content = "empty";
  
  exec("ls -lah", function (error, stdout, stderr){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });  

  return content;
}

function upload(response){
  console.log("Request handler 'upload' was called.");  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello upload");
  response.end();
 }

exports.start = start;
exports.upload = upload;
