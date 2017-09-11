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
// var sql = require("mssql");

//     // config for your database
//     var config = {
//         user: 'test',
//         password: 'password',
//         server: 'ABX-DEV-TF-SQL\sql2012', 
//         database: 'Company' 
//     };
    

// http.createServer(function (req, res) {
// // fs.readFile('./tim.html', function(err, data) {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.write(data);
// //     res.end();
// //   });

// // var fs = require('fs');

// //   // res.writeHead(200, {'Content-Type': 'text/html'});
// //   fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
// //     if (err) throw err;
// //     console.log('Saved!');
// //   });

// //open file
// // var q = url.parse(req.url, true);
// // var filename = "." + q.pathname;
// // fs.readFile(filename, function(err, data) {
// //   if (err) {
// //     res.writeHead(404, {'Content-Type': 'text/html'});
// //     return res.end("404 Not Found");
// //   }  
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write(data);
// //   return res.end();
// // });

// // res

//   // connect to your database
//   sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('SELECT TOP 1000 [DcoumentName] ,[ID] ,[ProjectVale] FROM [Company].[dbo].[Documents]', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });

// }).listen(8080);


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

var app = express();
app.get('/', function (req, res) {
   
 // var myServer =http.createServer(function (req, res) {
    var sql = require("mssql");

    // config for your database
    var config = {
              user: 'test',
              password: 'password',
              server: 'ABX-DEV-TF-SQL1.dev.palantirsolutions.com\\sql2012', 
              database: 'Company' 
          };


         // var q = url.parse(req.url, true);
         // var tablename = q.pathname.substring(1);
    // connect to your database
    sql.close();
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT * FROM [Company].[dbo].Employees', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
  }) ; 

  app.get('/name/:name', function (req, res) {
    
    var name = req.params.name;
  // var myServer =http.createServer(function (req, res) {
     var sql = require("mssql");
 
     // config for your database
     var config = {
               user: 'test',
               password: 'password',
               server: 'ABX-DEV-TF-SQL1.dev.palantirsolutions.com\\sql2012', 
               database: 'Company' 
           };
 
 
          // var q = url.parse(req.url, true);
          // var tablename = q.pathname.substring(1);
     // connect to your database
     sql.close();
     sql.connect(config, function (err) {
     
         if (err) console.log(err);
 
         // create Request object
         var request = new sql.Request();
            
         // query to the database and get the records
         request.query('SELECT * FROM [Company].[dbo].Employees where Name = \'' + name +'\'' , function (err, recordset) {
             
             if (err) console.log(err)
 
             // send records as a response
              res.send(recordset);
             
         });
     });
   }) ; 

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
