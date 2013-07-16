
function start(){
  console.log("Request handler 'starter' was called.");  
  return "Hello start";
}

function upload(){
  console.log("Request handler 'upload' was called.");  
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
