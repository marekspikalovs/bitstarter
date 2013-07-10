var express = require('express');
var fs = require('fs');
//var buf = require('buf');

var app = express.createServer(express.logger());

var index = fs.readFileSync('index.html');
//console.log(index.toString('utf8',0,index.length));

app.get('/', function(request, response) {
  response.send(index.toString('utf8',0,index.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
