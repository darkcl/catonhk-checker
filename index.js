var http = require('http');
var url = require('url');
var contents = require('./output.json')
var fs = require('fs');
var index = fs.readFileSync('./asset/index.html')
 
var server = http.createServer(function (req, res) {
  var queryData = url.parse(req.url, true).query;

  if (queryData.char) {
    res.writeHead(200, {"Content-Type": "text/plain"});

    if (!contents[queryData.char]) {
      res.end("No word\n");
    } else {
      res.end(contents[queryData.char].join('\n'));
    }
  } else {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(index);
  }
});
 
server.listen(5000); 
 
console.log('Node.js web server at port 5000 is running..')