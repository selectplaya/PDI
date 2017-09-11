var express = require('express');
var router = express.Router();
//require is basically like using in c# 
// var http = require('http');
// var url = require('url');
// var fs = require('fs');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
//require is basically like using in c# 
var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var currentDateTime = require('./myModules.js');
http.createServer(function (req, res) {
// fs.readFile('./tim.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });

// var fs = require('fs');

//   // res.writeHead(200, {'Content-Type': 'text/html'});
//   fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//open file
// var q = url.parse(req.url, true);
// var filename = "." + q.pathname;
// fs.readFile(filename, function(err, data) {
//   if (err) {
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     return res.end("404 Not Found");
//   }  
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(data);
//   return res.end();
// });

res.writeHead(200, {'Content-Type': 'text/html'});
res.write(uc("Hello World!"));
res.end();

}).listen(8080);


  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;
  
  // res.writeHead(200, {'Content-Type': 'text/html'});

  //   res.write("Hello World");
  //   res.end();
//}).listen(8080);



//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
  
//   //  res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.writeHead(200, {'Content-Type': 'text/html'});
// //    res.write("The date and time is currently: " + currentDateTime.myDateTime())

//   //  res.write(req.url);
//     res.write(txt);
//     res.end();

