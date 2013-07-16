
function start(){
  console.log("Request handler 'starter' was called.");  
}

function upload(){
  console.log("Request handler 'upload' was called.");  
}

exports.start = start;
exports.upload = upload;
